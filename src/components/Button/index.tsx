import { ButtonHTMLAttributes } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLElement> & {
    txt?: string
}

export const ButtonSearch = ({ txt, ...props }: ButtonProps) => {
    return (
        <button {...props}
            className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primaryBold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            {txt}
        </button>
    )
}