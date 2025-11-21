import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'
import * as readline from 'readline'

const prisma = new PrismaClient()

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

function question(query: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(query, resolve)
  })
}

async function createAdmin() {
  console.log('\n🔐 IUBPC Admin User Creation Script\n')
  console.log('This script will create a secure admin user for the IUBPC platform.')
  console.log('⚠️  IMPORTANT: Keep these credentials safe and secure!\n')

  try {
    // Get user input
    const email = await question('Enter admin email: ')
    const username = await question('Enter admin username: ')
    const fullName = await question('Enter admin full name: ')
    const password = await question('Enter admin password (min 8 characters): ')
    const confirmPassword = await question('Confirm password: ')

    // Validate input
    if (!email || !username || !fullName || !password) {
      console.error('\n❌ Error: All fields are required.')
      process.exit(1)
    }

    if (password.length < 8) {
      console.error('\n❌ Error: Password must be at least 8 characters long.')
      process.exit(1)
    }

    if (password !== confirmPassword) {
      console.error('\n❌ Error: Passwords do not match.')
      process.exit(1)
    }

    // Check if user already exists
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ email }, { username }],
      },
    })

    if (existingUser) {
      console.error('\n❌ Error: A user with this email or username already exists.')
      process.exit(1)
    }

    // Hash password
    console.log('\n🔒 Hashing password...')
    const hashedPassword = await bcrypt.hash(password, 12)

    // Create admin user
    console.log('👤 Creating admin user...')
    const admin = await prisma.user.create({
      data: {
        email,
        username,
        fullName,
        password: hashedPassword,
        role: 'ADMIN',
      },
    })

    console.log('\n✅ Admin user created successfully!')
    console.log('\n📋 Admin User Details:')
    console.log(`   ID: ${admin.id}`)
    console.log(`   Email: ${admin.email}`)
    console.log(`   Username: ${admin.username}`)
    console.log(`   Full Name: ${admin.fullName}`)
    console.log(`   Role: ${admin.role}`)
    console.log(`   Created: ${admin.createdAt}`)
    console.log('\n🎉 You can now login to the admin panel at /admin')
    console.log('\n⚠️  Remember to keep your credentials secure!')
  } catch (error) {
    console.error('\n❌ Error creating admin user:', error)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
    rl.close()
  }
}

createAdmin()
