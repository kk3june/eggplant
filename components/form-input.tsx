interface Props {
    type: string
    placeholder: string
    required: boolean
    errors: string[]
}

function FormInput(props: Props) {
    const { type, placeholder, required, errors } = props

    return (
        <>
            <input
                type={type}
                placeholder={placeholder}
                required={required}
                className="w-full h-10 ring-2 rounded-md px-2 focus:outline-none focus:ring-8 focus:ring-violet-300 text-gray-700"
            />
            {errors.map((error, index) => (
                <span key={index} className="text-red-500 font-large">
                    {error}
                </span>
            ))}
        </>
    )
}

export default FormInput
