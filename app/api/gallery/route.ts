import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { uploadImage } from '@/lib/cloudinary'
import { requireAuth, successResponse, errorResponse, handleApiError } from '@/lib/api-helpers'

// GET /api/gallery - Get all gallery images
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category') || ''
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '12')

    const where: any = {}

    if (category && category !== 'ALL') {
      where.category = category
    }

    const [images, total] = await Promise.all([
      prisma.galleryImage.findMany({
        where,
        include: {
          uploader: {
            select: {
              id: true,
              username: true,
              fullName: true,
              avatar: true,
            },
          },
        },
        skip: (page - 1) * limit,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.galleryImage.count({ where }),
    ])

    return successResponse({
      images,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    return handleApiError(error)
  }
}

// POST /api/gallery - Upload new image to gallery
export async function POST(request: NextRequest) {
  try {
    const session = await requireAuth()

    const formData = await request.formData()
    const file = formData.get('file') as File
    const title = formData.get('title') as string
    const description = formData.get('description') as string
    const category = formData.get('category') as string
    const eventDate = formData.get('eventDate') as string

    if (!file || !title) {
      return errorResponse('Missing required fields')
    }

    // Upload to Cloudinary
    const uploadResult = await uploadImage(file, 'iubpc/gallery') as any

    if (!uploadResult || !uploadResult.secure_url) {
      return errorResponse('Failed to upload image')
    }

    // Save to database
    const image = await prisma.galleryImage.create({
      data: {
        title,
        description,
        imageUrl: uploadResult.secure_url,
        publicId: uploadResult.public_id,
        category: category || 'ALL',
        eventDate: eventDate ? new Date(eventDate) : null,
        uploaderId: session.user.id,
      },
      include: {
        uploader: {
          select: {
            id: true,
            username: true,
            fullName: true,
            avatar: true,
          },
        },
      },
    })

    return successResponse(image, 201)
  } catch (error) {
    return handleApiError(error)
  }
}
