import 'next-auth'
import { UserRole } from '@prisma/client'

declare module 'next-auth' {
  interface User {
    role?: UserRole | string
    username?: string
  }

  interface Session {
    user: {
      id: string
      email: string
      name: string
      role: string
      username: string
    }
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    role?: string
    username?: string
  }
}
