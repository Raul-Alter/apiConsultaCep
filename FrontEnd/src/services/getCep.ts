import { ICep } from "../interfaces"
import { Api } from "./api"

export const getCepService = async (cep:string):Promise<ICep | undefined> =>{
    try {
        
        const response =  await Api.get(`consulta/cep/${cep}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}