import { useEffect, useState } from "react"

export const useForm = () => {
    const [inputData, setInputData] = useState("")
    const [error, setError] = useState("")

    const getFormData = (value:string) => {
        setInputData(value)
    }

    useEffect(() => {
        validateCep(inputData)
    }, [inputData])
    

    const validateCep = (cep:string) =>{
         const formatoCEP = /^[0-9]{8}$/;

        if(!cep) setError("digite um cep válido")

        if(formatoCEP.test(cep)) setError("digite as caracteres corretamente")
    }

    return {getFormData, inputData, error}
}