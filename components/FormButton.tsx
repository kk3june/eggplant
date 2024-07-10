'use client'

import { useFormStatus } from 'react-dom'

function FormButton() {
    const { pending } = useFormStatus()

    return (
        <button
            disabled={pending}
            className="w-full p-3 rounded-md bg-violet-500 disabled:bg-neutral-500"
        >
            {pending ? 'Loding...' : 'Create Account'}
        </button>
    )
}

export default FormButton
