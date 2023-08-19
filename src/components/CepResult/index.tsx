"use client"

import { InfosType , CepContext} from "@/context/cepContext"
import { useContext } from "react"
import { CepInfo } from "../CepInfo"


export const CepResult = () => {
    const {infos} = useContext(CepContext)

    return(

        <div className="mt-10 sm:mx-auto sm:max-w-sm space-y-3 shadow-lg shadow-indigo-500/40 p-4">
            <CepInfo name="Localidade" data={`${infos?.localidade} - ${infos?.uf}`} />
            <CepInfo name="Bairro" data={`${infos?.bairro}`} />
            <CepInfo name="Logradouro" data={`${infos?.logradouro}`} />
            {infos?.complemento &&  <CepInfo name="Complemento" data={`${infos?.complemento}`} />}
        </div>
        
    )
}