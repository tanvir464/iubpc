import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { deleteImage } from '@/lib/cloudinary'
import { requireAuth, successResponse, errorResponse, handleApiError } from '@/lib/api-helpers'

// GET /api/gallery/[id] - Get single gallery image
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const image = await prisma.galleryImage.findUnique({
      where: { id: params.id },
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

    if (!image) {
      return errorResponse('Image not found', 404)
    }

    // Increment views
    await prisma.galleryImage.update({
      where: { id: params.id },
      data: { views: { increment: 1 } },
    })

    return successResponse(image)
  } catch (error) {
    return handleApiError(error)
  }
}

// PATCH /api/gallery/[id] - Update gallery image
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await requireAuth()

    const body = await request.json()

    // Check if image exists
    const existingImage = await prisma.galleryImage.findUnique({
      where: { id: params.id },
    })

    if (!existingImage) {
      return errorResponse('Image not found', 404)
    }

    // Check if user is uploader or admin
    if (
      existingImage.uploaderId !== session.user.id &&
      session.user.role !== 'ADMIN' &&
      session.user.role !== 'MODERATOR'
    ) {
      return errorResponse('Forbidden: You can only edit your own images', 403)
    }

    // Convert eventDate to Date if present
    if (body.eventDate) {
      body.eventDate = new Date(body.eventDate)
    }

    const image = await prisma.galleryImage.update({
      where: { id: params.id },
      data: body,
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

    return successResponse(image)
  } catch (error) {
    return handleApiError(error)
  }
}

// DELETE /api/gallery/[id] - Delete gallery image
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await requireAuth()

    const image = await prisma.galleryImage.findUnique({
      where: { id: params.id },
    })

    if (!image) {
      return errorResponse('Image not found', 404)
    }

    if (
      image.uploaderId !== session.user.id &&
      session.user.role !== 'ADMIN' &&
      session.user.role !== 'MODERATOR'
    ) {
      return errorResponse('Forbidden: You can only delete your own images', 403)
    }

    // Delete from Cloudinary
    try {
      await deleteImage(image.publicId)
    } catch (error) {
      console.error('Error deleting from Cloudinary:', error)
      // Continue with database deletion even if Cloudinary deletion fails
    }

    // Delete from database
    await prisma.galleryImage.delete({
      where: { id: params.id },
    })

    return successResponse({ message: 'Image deleted successfully' })
  } catch (error) {
    return handleApiError(error)
  }
}
