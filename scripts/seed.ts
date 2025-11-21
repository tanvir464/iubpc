import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seed...\n')

  // Create sample users
  console.log('👥 Creating sample users...')
  const hashedPassword = await bcrypt.hash('password123', 10)

  const admin = await prisma.user.upsert({
    where: { email: 'admin@iubpc.com' },
    update: {},
    create: {
      email: 'admin@iubpc.com',
      username: 'admin',
      password: await bcrypt.hash('admin123', 12),
      fullName: 'IUBPC Admin',
      role: 'ADMIN',
      department: 'Computer Science',
      batch: '2020',
      totalScore: 5000,
      contestsJoined: 10,
      rank: 1,
      bio: 'Platform administrator',
    },
  })

  const users = await Promise.all([
    prisma.user.upsert({
      where: { email: 'ahmed@iub.edu.bd' },
      update: {},
      create: {
        email: 'ahmed@iub.edu.bd',
        username: 'ahmed_hassan',
        password: hashedPassword,
        fullName: 'Ahmed Hassan',
        role: 'MEMBER',
        department: 'Computer Science',
        batch: '2021',
        totalScore: 4850,
        contestsJoined: 6,
        rank: 2,
        github: 'ahmedhassan',
        codeforces: 'ahmed_cf',
        badges: JSON.stringify(['🥇 Contest Winner', '⚡ Speed Demon', '🎯 Problem Solver']),
      },
    }),
    prisma.user.upsert({
      where: { email: 'sarah@iub.edu.bd' },
      update: {},
      create: {
        email: 'sarah@iub.edu.bd',
        username: 'sarah_khan',
        password: hashedPassword,
        fullName: 'Sarah Khan',
        role: 'MEMBER',
        department: 'Computer Science',
        batch: '2021',
        totalScore: 4720,
        contestsJoined: 6,
        rank: 3,
        github: 'sarahkhan',
        linkedin: 'sarah-khan',
        badges: JSON.stringify(['🏆 Top Performer', '💡 Creative Thinker']),
      },
    }),
    prisma.user.upsert({
      where: { email: 'rafiq@iub.edu.bd' },
      update: {},
      create: {
        email: 'rafiq@iub.edu.bd',
        username: 'rafiq_islam',
        password: hashedPassword,
        fullName: 'Rafiq Islam',
        role: 'MODERATOR',
        department: 'Software Engineering',
        batch: '2020',
        totalScore: 4690,
        contestsJoined: 6,
        rank: 4,
        github: 'rafiqislam',
        codeforces: 'rafiq_cf',
        badges: JSON.stringify(['🎖️ Consistent Performer', '📚 Algorithm Expert']),
      },
    }),
  ])

  console.log('✅ Created sample users\n')

  // Create sample contests
  console.log('🏆 Creating sample contests...')
  const contests = await Promise.all([
    prisma.contest.create({
      data: {
        title: 'Algorithm Master Challenge',
        description: 'Test your algorithmic skills with advanced problems in dynamic programming, graphs, and data structures.',
        platform: 'Custom Platform',
        status: 'UPCOMING',
        difficulty: 'Advanced',
        startDate: new Date('2025-12-01'),
        endDate: new Date('2025-12-01T03:00:00'),
        registrationDeadline: new Date('2025-11-30'),
        participants: 0,
        problems: 8,
        duration: 180,
        prize: '1st Place: $500, 2nd Place: $300, 3rd Place: $200',
      },
    }),
    prisma.contest.create({
      data: {
        title: 'Data Structure Challenge',
        description: 'Master complex data structures including trees, graphs, and heaps in this comprehensive contest.',
        platform: 'Codeforces',
        contestUrl: 'https://codeforces.com',
        status: 'COMPLETED',
        difficulty: 'Intermediate',
        startDate: new Date('2024-10-15'),
        endDate: new Date('2024-10-15T03:00:00'),
        participants: 45,
        problems: 6,
        duration: 180,
      },
    }),
    prisma.contest.create({
      data: {
        title: 'Speed Programming Sprint',
        description: 'Fast-paced competition focusing on quick problem-solving and implementation skills.',
        platform: 'AtCoder',
        contestUrl: 'https://atcoder.jp',
        status: 'COMPLETED',
        difficulty: 'Beginner',
        startDate: new Date('2024-09-20'),
        endDate: new Date('2024-09-20T02:00:00'),
        participants: 52,
        problems: 5,
        duration: 120,
      },
    }),
  ])

  console.log('✅ Created sample contests\n')

  // Create sample blogs
  console.log('📝 Creating sample blogs...')
  const blogs = await Promise.all([
    prisma.blog.create({
      data: {
        title: 'Mastering Dynamic Programming: A Complete Guide',
        slug: 'mastering-dynamic-programming-guide',
        excerpt: 'Learn the fundamentals of dynamic programming and how to solve complex problems efficiently.',
        content: `# Mastering Dynamic Programming

Dynamic Programming is a powerful technique for solving optimization problems...

## Key Concepts

1. Overlapping Subproblems
2. Optimal Substructure
3. Memoization vs Tabulation

## Examples

Let's look at the classic Fibonacci problem...`,
        category: 'ALGORITHMS',
        tags: JSON.stringify(['algorithms', 'dynamic-programming', 'tutorial']),
        published: true,
        publishedAt: new Date('2024-10-01'),
        views: 245,
        likes: 42,
        authorId: admin.id,
      },
    }),
    prisma.blog.create({
      data: {
        title: 'Getting Started with Competitive Programming',
        slug: 'getting-started-competitive-programming',
        excerpt: 'A beginner-friendly guide to starting your competitive programming journey.',
        content: `# Getting Started with Competitive Programming

Competitive programming is an exciting way to improve your problem-solving skills...

## Resources for Beginners

- Codeforces
- AtCoder
- LeetCode
- CodeChef`,
        category: 'COMPETITIVE_PROGRAMMING',
        tags: JSON.stringify(['beginner', 'competitive-programming', 'resources']),
        published: true,
        publishedAt: new Date('2024-09-15'),
        views: 389,
        likes: 67,
        authorId: users[2].id,
      },
    }),
  ])

  console.log('✅ Created sample blogs\n')

  // Create sample announcements
  console.log('📢 Creating sample announcements...')
  await Promise.all([
    prisma.announcement.create({
      data: {
        title: 'New Contest: Algorithm Master Challenge',
        content: 'Registration is now open for our upcoming Algorithm Master Challenge! This advanced-level contest will test your skills in dynamic programming, graph theory, and complex data structures. Register before November 30th to participate.',
        type: 'contest',
        priority: 10,
        pinned: true,
        authorId: admin.id,
      },
    }),
    prisma.announcement.create({
      data: {
        title: 'Weekly Workshop: Graph Algorithms',
        content: 'Join us this Saturday for a hands-on workshop on graph algorithms. We\'ll cover BFS, DFS, Dijkstra\'s algorithm, and more. All skill levels welcome!',
        type: 'event',
        priority: 5,
        pinned: false,
        authorId: admin.id,
      },
    }),
    prisma.announcement.create({
      data: {
        title: 'Club Meeting Rescheduled',
        content: 'Our weekly club meeting has been rescheduled to Friday at 4 PM. See you all there!',
        type: 'general',
        priority: 3,
        pinned: false,
        expiresAt: new Date('2025-12-31'),
        authorId: admin.id,
      },
    }),
  ])

  console.log('✅ Created sample announcements\n')

  console.log('🎉 Database seeding completed successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
