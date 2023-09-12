"use client"

import React, { useContext, useState } from "react";
import { CepContext, InfosType } from "@/context/cepContext";
import { getCep } from "./getCep";
import { InputSearch } from "../Input";
import { ButtonSearch } from "../Button";

export const FormSearch = () => {
  const [cep, setCep] = useState<string>('')
  const [invalidCep, setInvalidCep] = useState<string | null>(null)
  const { setResult } = useContext(CepContext)

  const searchCep = async (cepVal: string) => {
    setResult(null)
    setInvalidCep(null)
    const infos = await getCep(cepVal)

    if (infos.status) {
      setResult(infos.data)
    }
    setInvalidCep(infos.errorMsg || null)
  }

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm space-y-6 shadow-lg shadow-indigo-500/40 p-4">
      <h2 className="text-primary text-center font-bold">BUSCA CEP</h2>
      <InputSearch
        label="Busca Cep"
        onChange={e => setCep(e.target.value)}
        onKeyDown={e => e.key === "Enter" && searchCep(cep)}
      />
      <ButtonSearch txt="Pesquisar" onClick={() => searchCep(cep)} />
      {invalidCep && <p>{invalidCep}</p>}
    </div>
  )
}