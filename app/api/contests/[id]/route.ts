import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAdmin, successResponse, errorResponse, handleApiError } from '@/lib/api-helpers'

// GET /api/contests/[id] - Get single contest
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const contest = await prisma.contest.findUnique({
      where: { id: params.id },
      include: {
        results: {
          include: {
            user: {
              select: {
                id: true,
                username: true,
                fullName: true,
                avatar: true,
              },
            },
          },
          orderBy: { rank: 'asc' },
        },
      },
    })

    if (!contest) {
      return errorResponse('Contest not found', 404)
    }

    return successResponse(contest)
  } catch (error) {
    return handleApiError(error)
  }
}

// PATCH /api/contests/[id] - Update contest (Admin only)
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await requireAdmin()

    const body = await request.json()

    // Convert date strings to Date objects if present
    if (body.startDate) body.startDate = new Date(body.startDate)
    if (body.endDate) body.endDate = new Date(body.endDate)
    if (body.registrationDeadline) body.registrationDeadline = new Date(body.registrationDeadline)

    const contest = await prisma.contest.update({
      where: { id: params.id },
      data: body,
    })

    return successResponse(contest)
  } catch (error) {
    return handleApiError(error)
  }
}

// DELETE /api/contests/[id] - Delete contest (Admin only)
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await requireAdmin()

    await prisma.contest.delete({
      where: { id: params.id },
    })

    return successResponse({ message: 'Contest deleted successfully' })
  } catch (error) {
    return handleApiError(error)
  }
}
