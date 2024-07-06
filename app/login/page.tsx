'use client'

import handleSubmit from '@/app/login/action'
import FormButton from '@/components/form-button'
import FormInput from '@/components/form-input'
import { useFormState } from 'react-dom'

export default function LogIn() {
    const [state, action] = useFormState(handleSubmit, null)

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
                        errors={state?.fieldErrors.email}
                    />
                        <FormInput
                            name="username"
                            type="text"
                            placeholder="Username"
                            required
                            errors={state?.fieldErrors.username}
                        />
                    <FormInput
                        name="password"
                        type="passwords"
                        placeholder="Password"
                        required
                        errors={state?.fieldErrors.password}
                    />
                    <span>
                        <FormButton />
                    </span>
                </form>
            </div>
        </main>
    )
}
