import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAdmin, successResponse, errorResponse, handleApiError } from '@/lib/api-helpers'

// POST /api/leaderboard/update - Recalculate leaderboard ranks (Admin only)
export async function POST(request: NextRequest) {
  try {
    await requireAdmin()

    // Get all users ordered by total score
    const users = await prisma.user.findMany({
      where: {
        totalScore: { gt: 0 },
      },
      orderBy: { totalScore: 'desc' },
      select: { id: true },
    })

    // Update ranks
    const updatePromises = users.map((user, index) =>
      prisma.user.update({
        where: { id: user.id },
        data: { rank: index + 1 },
      })
    )

    await Promise.all(updatePromises)

    return successResponse({ message: 'Leaderboard ranks updated successfully', usersUpdated: users.length })
  } catch (error) {
    return handleApiError(error)
  }
}
