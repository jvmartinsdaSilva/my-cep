import { InputHTMLAttributes, useId } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string
}


export const InputSearch = ({ label = "", ...props}: InputProps) => {
    const randomId = useId()
    return (
        <>
            <label htmlFor={randomId} className="block text-sm font-medium leading-1 text-text">
                {label}
            </label>
            <div className="mt-1">
                <input
                    id={randomId}
                    type="number"
                    className="block w-full rounded-md border-0 py-1.5 text-text shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    {...props}
                />
            </div>
        </>
    )
}
