import { NextResponse } from 'next/server'
import { auth } from './auth'

export async function getSession() {
  return await auth()
}

export async function requireAuth() {
  const session = await getSession()
  if (!session) {
    throw new Error('Unauthorized')
  }
  return session
}

export async function requireAdmin() {
  const session = await requireAuth()
  if (session.user.role !== 'ADMIN' && session.user.role !== 'MODERATOR') {
    throw new Error('Forbidden: Admin access required')
  }
  return session
}

export function successResponse(data: any, status = 200) {
  return NextResponse.json({ success: true, data }, { status })
}

export function errorResponse(message: string, status = 400) {
  return NextResponse.json({ success: false, error: message }, { status })
}

export function handleApiError(error: any) {
  console.error('API Error:', error)

  if (error.message === 'Unauthorized') {
    return errorResponse('Unauthorized', 401)
  }

  if (error.message.startsWith('Forbidden')) {
    return errorResponse(error.message, 403)
  }

  return errorResponse(
    error.message || 'Internal server error',
    error.status || 500
  )
}
