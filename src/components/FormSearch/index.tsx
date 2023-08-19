"use client"

import React, { useContext, useState } from "react";
import { CepContext, InfosType } from "@/context/cepContext";

import { getCep } from "@/components/FormSearch/getCep";

export const FormSearch = () => {
  const [cep, setCep] = useState<string>('')
  const [invalidCep, setInvalidCep] = useState<string | null>(null)
  const { setResult } = useContext(CepContext)

  const searchCep = async (cepVal: string) => {
      setResult(null)
      setInvalidCep(null)

      const infos = await getCep(cepVal)

      if(infos.status){
        setResult(infos.data)
      }
      setInvalidCep(infos.errorMsg || null)
  }

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm space-y-6 shadow-lg shadow-indigo-500/40 p-4">
      <h2 className="text-indigo-900 text-center font-bold">BUSCA CEP</h2>
      <label htmlFor="cep" className="block text-sm font-medium leading-1 text-gray-600">
        Seu CEP:
      </label>
      <div className="mt-1">
        <input
          id="cep"
          type="number"
          placeholder="Somente números"
          required
          autoComplete="not"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          onChange={e => setCep(e.target.value)}
          onKeyDown={e => e.key === "Enter" && searchCep(cep)}
        />
      </div>
        <button onClick={() => searchCep(cep)}
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Buscar
        </button>
        {invalidCep && <p>{invalidCep}</p>}
    </div>
  )
}