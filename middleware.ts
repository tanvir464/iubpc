import { auth } from '@/lib/auth'
import { NextResponse } from 'next/server'

export default auth((req) => {
  const path = req.nextUrl.pathname
  const isAdminRoute = path.startsWith('/admin') && path !== '/admin'

  if (isAdminRoute) {
    const session = req.auth

    // If no session or user is not an admin/moderator, redirect to login
    if (!session || (session.user.role !== 'ADMIN' && session.user.role !== 'MODERATOR')) {
      const url = new URL('/admin', req.url)
      url.searchParams.set('error', 'unauthorized')
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
})

export const config = {
  matcher: [
    '/admin/:path*',
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
