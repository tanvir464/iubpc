import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAdmin, successResponse, errorResponse, handleApiError } from '@/lib/api-helpers'
import bcrypt from 'bcryptjs'

// GET /api/users - Get all users (Admin only)
export async function GET(request: NextRequest) {
  try {
    await requireAdmin()

    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const search = searchParams.get('search') || ''
    const role = searchParams.get('role') || ''

    const where: any = {}

    if (search) {
      where.OR = [
        { fullName: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } },
        { username: { contains: search, mode: 'insensitive' } },
      ]
    }

    if (role) {
      where.role = role
    }

    const [users, total] = await Promise.all([
      prisma.user.findMany({
        where,
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
          totalScore: true,
          contestsJoined: true,
          rank: true,
          createdAt: true,
          lastLoginAt: true,
        },
        skip: (page - 1) * limit,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.user.count({ where }),
    ])

    return successResponse({
      users,
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

// POST /api/users - Create new user
export async function POST(request: NextRequest) {
  try {
    await requireAdmin()

    const body = await request.json()
    const { email, username, password, fullName, role, studentId, department, batch } = body

    // Validate required fields
    if (!email || !username || !password || !fullName) {
      return errorResponse('Missing required fields')
    }

    // Check if email or username already exists
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ email }, { username }],
      },
    })

    if (existingUser) {
      return errorResponse('Email or username already exists')
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create user
    const user = await prisma.user.create({
      data: {
        email,
        username,
        password: hashedPassword,
        fullName,
        role: role || 'MEMBER',
        studentId,
        department,
        batch,
      },
      select: {
        id: true,
        email: true,
        username: true,
        fullName: true,
        role: true,
        studentId: true,
        department: true,
        batch: true,
        createdAt: true,
      },
    })

    return successResponse(user, 201)
  } catch (error) {
    return handleApiError(error)
  }
}
