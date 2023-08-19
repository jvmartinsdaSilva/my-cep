import React from "react"

type Info = {
    name: string,
    data: String
}

export const CepInfo = ({name,data}: Info) => {
    return(
        <span className="flex justify-items-start  space-x-4 align-text-top">
            <h2 className=" text-indigo-600 font-bold align-middle">{name}: </h2>
            <h2 className="align-text-top text-slate-950 align-middle" >{data}</h2>
        </span>
    )
}