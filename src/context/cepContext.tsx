"use client"

import React, { createContext, useState } from "react";


export type InfosType = {
    bairro: string,
    cep: string,
    complemento: string | null,
    ddd: string,
    gia: string,
    ibge: string,
    localidade: string,
    logradouro: string,
    siafi: string
    uf: string,
}



type CepContext = {
    infos: InfosType | null,
    setResult: (info: InfosType | null) => void
}

export const CepContext = createContext<CepContext>({} as CepContext)

export const CepProvider = ({children}: {children: React.ReactNode}) => {
    const [infos, setInfos] = useState<InfosType | null>(null)

    const setResult = (res:InfosType | null) => {
        setInfos(res)
    }

    return(
        <CepContext.Provider value={{infos, setResult}}>
            {children}
        </CepContext.Provider>
    )
}