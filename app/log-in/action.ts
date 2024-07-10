'use server'

import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/session'
import bcrypt from 'bcrypt'
import { redirect } from 'next/navigation'
import { z } from 'zod'

const schema = z.object({
    username: z.string(),
    password: z.string(),
})

export async function handleSubmit(prevState: any, formData: FormData) {
    const data = {
    username: formData.get('username'),
    password: formData.get('password'),
    }

    const result = schema.safeParse(data)

    if (!result.success) {
    return result.error.flatten()
    }

    const { username, password } = result.data

    const user = await prisma.user.findUnique({ where: { username } })

    if (!user || !(await bcrypt.compare(password, user.password))) {
    return { error: "Invalid username or password" }
    }

    const session = await getSession()
    session.userId = user.id
    await session.save()

    redirect('/profile')
}