import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAuth, successResponse, errorResponse, handleApiError } from '@/lib/api-helpers'

// GET /api/announcements/[id] - Get single announcement
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const announcement = await prisma.announcement.findUnique({
      where: { id: params.id },
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

    if (!announcement) {
      return errorResponse('Announcement not found', 404)
    }

    return successResponse(announcement)
  } catch (error) {
    return handleApiError(error)
  }
}

// PATCH /api/announcements/[id] - Update announcement
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await requireAuth()

    const body = await request.json()

    // Check if announcement exists
    const existingAnnouncement = await prisma.announcement.findUnique({
      where: { id: params.id },
    })

    if (!existingAnnouncement) {
      return errorResponse('Announcement not found', 404)
    }

    // Check if user is author or admin
    if (
      existingAnnouncement.authorId !== session.user.id &&
      session.user.role !== 'ADMIN' &&
      session.user.role !== 'MODERATOR'
    ) {
      return errorResponse('Forbidden: You can only edit your own announcements', 403)
    }

    // Convert expiresAt to Date if present
    if (body.expiresAt) {
      body.expiresAt = new Date(body.expiresAt)
    }

    const announcement = await prisma.announcement.update({
      where: { id: params.id },
      data: body,
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

    return successResponse(announcement)
  } catch (error) {
    return handleApiError(error)
  }
}

// DELETE /api/announcements/[id] - Delete announcement
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await requireAuth()

    const announcement = await prisma.announcement.findUnique({
      where: { id: params.id },
    })

    if (!announcement) {
      return errorResponse('Announcement not found', 404)
    }

    if (
      announcement.authorId !== session.user.id &&
      session.user.role !== 'ADMIN' &&
      session.user.role !== 'MODERATOR'
    ) {
      return errorResponse('Forbidden: You can only delete your own announcements', 403)
    }

    await prisma.announcement.delete({
      where: { id: params.id },
    })

    return successResponse({ message: 'Announcement deleted successfully' })
  } catch (error) {
    return handleApiError(error)
  }
}
