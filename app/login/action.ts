'use server'
import { z } from 'zod'

const validation = z.object({
    email: z.string().refine(val => val.endsWith("@zod.com")),
    username: z.string().min(5),
    password: z.string().min(10).regex(/\d/)
})

const handleSubmit = async (prevState: any, formData: FormData) => {
    const data = {
        email: formData.get("email"),
        username: formData.get("username"),
        password: formData.get("password"),
    }

    const result = validation.safeParse(data)
    if(!result.success) return result.error.flatten()
}

export default handleSubmit
