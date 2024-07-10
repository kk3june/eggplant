'use server'

import { prisma } from '@/lib/prisma'
import bcrypt from 'bcrypt'
import { redirect } from 'next/navigation'
import { z } from 'zod'

const schema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

export async function handleSubmit(prevState: any, formData: FormData) {
  const data = {
    username: formData.get('username'),
    email: formData.get('email'),
    password: formData.get('password'),
    confirmPassword: formData.get('confirmPassword'),
  }

  const result = schema.safeParse(data)

  if (!result.success) {
    return result.error.flatten()
  }

  const { username, email, password } = result.data
  const hashedPassword = await bcrypt.hash(password, 10)

  try {
    await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    })
    redirect('/log-in')
  } catch (error) {
    return { error: "Failed to create account" }
  }
}