import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAuth, successResponse, errorResponse, handleApiError } from '@/lib/api-helpers'

// GET /api/announcements - Get all announcements
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const pinned = searchParams.get('pinned')
    const type = searchParams.get('type') || ''
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')

    const where: any = {
      published: true,
      OR: [
        { expiresAt: null },
        { expiresAt: { gt: new Date() } },
      ],
    }

    if (pinned !== null && pinned !== undefined) {
      where.pinned = pinned === 'true'
    }

    if (type) {
      where.type = type
    }

    const [announcements, total] = await Promise.all([
      prisma.announcement.findMany({
        where,
        include: {
          author: {
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
        orderBy: [
          { pinned: 'desc' },
          { priority: 'desc' },
          { createdAt: 'desc' },
        ],
      }),
      prisma.announcement.count({ where }),
    ])

    return successResponse({
      announcements,
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

// POST /api/announcements - Create new announcement
export async function POST(request: NextRequest) {
  try {
    const session = await requireAuth()

    const body = await request.json()
    const { title, content, type, priority, pinned, published, expiresAt } = body

    // Validate required fields
    if (!title || !content) {
      return errorResponse('Missing required fields')
    }

    const announcement = await prisma.announcement.create({
      data: {
        title,
        content,
        type: type || 'general',
        priority: priority || 0,
        pinned: pinned || false,
        published: published !== false,
        expiresAt: expiresAt ? new Date(expiresAt) : null,
        authorId: session.user.id,
      },
      include: {
        author: {
          select: {
            id: true,
            username: true,
            fullName: true,
            avatar: true,
          },
        },
      },
    })

    return successResponse(announcement, 201)
  } catch (error) {
    return handleApiError(error)
  }
}
