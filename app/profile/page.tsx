import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/session'
import { redirect } from 'next/navigation'

export default async function Profile() {
  const session = await getSession()

  if (!session.userId) {
    redirect('/log-in')
  }

  const user = await prisma.user.findUnique({
    where: { id: session.userId },
    select: { username: true, email: true },
  })

  if (!user) {
    return <div>User not found</div>
  }

  return (
    <main className="flex flex-col gap-10 py-8 px-6">
      <h1 className="text-3xl font-bold">Profile</h1>
      <div>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
      </div>
    </main>
  )
}