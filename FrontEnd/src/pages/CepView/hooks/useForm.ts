import * as Yup from 'yup';
import { useEffect, useState } from "react"

export const useForm = () => {
    const [inputData, setInputData] = useState("")
    const [error, setError] = useState("")


const schema = Yup.object().shape({
  cep: Yup.string()
    .matches(/^\d{5}-\d{3}$/, 'CEP inválido, utilize o formato 00000-00') // Formato esperado: XXXXX-XXX
    .required('CEP é obrigatório'),
});




    const getFormData = (value:string) => {
        setInputData(value)
    }

    useEffect(() => {
        validateCep(inputData)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputData])
    

    const validateCep = async (cep:string) =>{
    await schema.validate({cep})
  .then(() => setError(""))
  .catch(err =>{
    setError(err.message)
  });
    }

    return {getFormData, inputData, error}
}