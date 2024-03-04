import { Api } from "./api"

export const getCepService = async (cep:string) =>{
   const response =  await Api.get(`consulta/cep/${cep}`)
   return response
}