'use server'

const handleSubmit = async (prevState: any, formData: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 5000))
    return {
        errors: ['cannot find id', 'wrong password'],
    }
}

export default handleSubmit
