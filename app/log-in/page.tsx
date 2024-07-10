'use client'

import { handleSubmit } from '@/app/create-account/action'
import { default as FormButton, default as FormInput } from '@/components/FormButton'
import { useFormState } from 'react-dom'

export default function Login() {
  const [state, action] = useFormState(handleSubmit, null)

  return (
    <main className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-12">
        <span className="text-8xl text-center">🍆</span>
        <form action={action} className="flex flex-col gap-6">
          <FormInput
            name="username"
            type="text"
            placeholder="Username"
            required
            errors={state?.fieldErrors.username}
          />
          <FormInput
            name="password"
            type="password"
            placeholder="Password"
            required
            errors={state?.fieldErrors.password}
          />
          <span>
            <FormButton>Log In</FormButton>
          </span>
        </form>
      </div>
    </main>
  )
}