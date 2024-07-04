interface Props {
    type: string;
    placeholder: string
    required: boolean;
    errors: string[]
}

function FormInput(props: Props) {
    const {type, placeholder, required, errors} = props

    return (
        <>
            <input type={type} placeholder={placeholder} required={required} className="w-full ring-2 rounded-md"/>
            {errors.map((error, index) => (<span key={index} className="text-red-500 font-large">{error}</span>))} 
        </>
    )
}

export default FormInput