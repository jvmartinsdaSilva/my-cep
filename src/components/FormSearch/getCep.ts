"use client"

export const getCep = async (cep: string) => {
    try{
        const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const data = await res.json()
        
        if(data.erro){
            return {errorMsg: "CEP não encontrado", status: false}
        }

        return {data , status: true}
    } catch (err) {
        console.log("ERRO: " + err)
        return {msg: "Formato do CEP inválido", status: false}
    }
}