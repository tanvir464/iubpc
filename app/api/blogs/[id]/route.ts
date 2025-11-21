import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAuth, successResponse, errorResponse, handleApiError } from '@/lib/api-helpers'

// GET /api/blogs/[id] - Get single blog
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const blog = await prisma.blog.findUnique({
      where: { id: params.id },
      include: {
        author: {
          select: {
            id: true,
            username: true,
            fullName: true,
            avatar: true,
            bio: true,
          },
        },
      },
    })

    if (!blog) {
      return errorResponse('Blog not found', 404)
    }

    // Increment views
    await prisma.blog.update({
      where: { id: params.id },
      data: { views: { increment: 1 } },
    })

    return successResponse(blog)
  } catch (error) {
    return handleApiError(error)
  }
}

// PATCH /api/blogs/[id] - Update blog
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await requireAuth()

    const body = await request.json()

    // Check if blog exists and user is author or admin
    const existingBlog = await prisma.blog.findUnique({
      where: { id: params.id },
    })

    if (!existingBlog) {
      return errorResponse('Blog not found', 404)
    }

    if (
      existingBlog.authorId !== session.user.id &&
      session.user.role !== 'ADMIN' &&
      session.user.role !== 'MODERATOR'
    ) {
      return errorResponse('Forbidden: You can only edit your own blogs', 403)
    }

    // If publishing for the first time, set publishedAt
    if (body.published && !existingBlog.published) {
      body.publishedAt = new Date()
    }

    const blog = await prisma.blog.update({
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

    return successResponse(blog)
  } catch (error) {
    return handleApiError(error)
  }
}

// DELETE /api/blogs/[id] - Delete blog
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await requireAuth()

    const blog = await prisma.blog.findUnique({
      where: { id: params.id },
    })

    if (!blog) {
      return errorResponse('Blog not found', 404)
    }

    if (
      blog.authorId !== session.user.id &&
      session.user.role !== 'ADMIN' &&
      session.user.role !== 'MODERATOR'
    ) {
      return errorResponse('Forbidden: You can only delete your own blogs', 403)
    }

    await prisma.blog.delete({
      where: { id: params.id },
    })

    return successResponse({ message: 'Blog deleted successfully' })
  } catch (error) {
    return handleApiError(error)
  }
}
