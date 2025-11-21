import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAdmin, successResponse, errorResponse, handleApiError } from '@/lib/api-helpers'
import bcrypt from 'bcryptjs'

// GET /api/users/[id] - Get single user
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: params.id },
      select: {
        id: true,
        email: true,
        username: true,
        fullName: true,
        role: true,
        studentId: true,
        department: true,
        batch: true,
        avatar: true,
        bio: true,
        github: true,
        linkedin: true,
        codeforces: true,
        totalScore: true,
        contestsJoined: true,
        rank: true,
        badges: true,
        createdAt: true,
        lastLoginAt: true,
      },
    })

    if (!user) {
      return errorResponse('User not found', 404)
    }

    return successResponse(user)
  } catch (error) {
    return handleApiError(error)
  }
}

// PATCH /api/users/[id] - Update user
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await requireAdmin()

    const body = await request.json()
    const { password, ...updateData } = body

    // If password is being updated, hash it
    if (password) {
      updateData.password = await bcrypt.hash(password, 10)
    }

    const user = await prisma.user.update({
      where: { id: params.id },
      data: updateData,
      select: {
        id: true,
        email: true,
        username: true,
        fullName: true,
        role: true,
        studentId: true,
        department: true,
        batch: true,
        avatar: true,
        updatedAt: true,
      },
    })

    return successResponse(user)
  } catch (error) {
    return handleApiError(error)
  }
}

// DELETE /api/users/[id] - Delete user
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await requireAdmin()

    await prisma.user.delete({
      where: { id: params.id },
    })

    return successResponse({ message: 'User deleted successfully' })
  } catch (error) {
    return handleApiError(error)
  }
}
