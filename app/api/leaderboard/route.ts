import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { successResponse, handleApiError } from '@/lib/api-helpers'

// GET /api/leaderboard - Get leaderboard
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '50')

    const [users, total] = await Promise.all([
      prisma.user.findMany({
        where: {
          totalScore: { gt: 0 },
        },
        select: {
          id: true,
          username: true,
          fullName: true,
          avatar: true,
          totalScore: true,
          contestsJoined: true,
          rank: true,
          badges: true,
          department: true,
          batch: true,
        },
        skip: (page - 1) * limit,
        take: limit,
        orderBy: { totalScore: 'desc' },
      }),
      prisma.user.count({
        where: {
          totalScore: { gt: 0 },
        },
      }),
    ])

    // Calculate ranks
    const rankedUsers = users.map((user, index) => ({
      ...user,
      rank: (page - 1) * limit + index + 1,
    }))

    return successResponse({
      leaderboard: rankedUsers,
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
