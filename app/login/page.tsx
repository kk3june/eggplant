'use client'

import FormButton from '@/components/form-button'
import FormInput from '@/components/form-input'
import { useFormState, useFormStatus } from 'react-dom'
import handleSubmit from '@/app/login/action'

export default function LogIn() {
    const [state, action] = useFormState(handleSubmit, { test: 1 } as any)

    return (
        <main className="flex flex-col gap-10 py-8 px-6">
            <div className="flex flex-col gap-12">
                <span className="text-8xl text-center">🍆</span>
                <form action={action} className="flex flex-col gap-6">
                    <FormInput
                        name="email"
                        type="email"
                        placeholder="Email"
                        required
                        errors={state.errors ?? []}
                    />
                    <FormInput
                        name="username"
                        type="text"
                        placeholder="Username"
                        required
                        errors={[]}
                    />
                    <FormInput
                        name="password"
                        type="passwords"
                        placeholder="Password"
                        required
                        errors={[]}
                    />
                    <span>
                        <FormButton />
                    </span>
                </form>
            </div>
        </main>
    )
}
