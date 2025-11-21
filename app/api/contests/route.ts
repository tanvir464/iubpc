import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAdmin, successResponse, errorResponse, handleApiError } from '@/lib/api-helpers'

// GET /api/contests - Get all contests
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status') || ''
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')

    const where: any = {}

    if (status) {
      where.status = status
    }

    const [contests, total] = await Promise.all([
      prisma.contest.findMany({
        where,
        include: {
          _count: {
            select: { results: true },
          },
        },
        skip: (page - 1) * limit,
        take: limit,
        orderBy: { startDate: 'desc' },
      }),
      prisma.contest.count({ where }),
    ])

    return successResponse({
      contests,
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

// POST /api/contests - Create new contest (Admin only)
export async function POST(request: NextRequest) {
  try {
    await requireAdmin()

    const body = await request.json()
    const {
      title,
      description,
      platform,
      contestUrl,
      status,
      difficulty,
      startDate,
      endDate,
      registrationDeadline,
      participants,
      problems,
      duration,
      prize,
      rules,
      banner,
    } = body

    // Validate required fields
    if (!title || !description || !platform || !startDate || !endDate) {
      return errorResponse('Missing required fields')
    }

    const contest = await prisma.contest.create({
      data: {
        title,
        description,
        platform,
        contestUrl,
        status: status || 'UPCOMING',
        difficulty,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        registrationDeadline: registrationDeadline ? new Date(registrationDeadline) : null,
        participants: participants || 0,
        problems: problems || 0,
        duration,
        prize,
        rules,
        banner,
      },
    })

    return successResponse(contest, 201)
  } catch (error) {
    return handleApiError(error)
  }
}
