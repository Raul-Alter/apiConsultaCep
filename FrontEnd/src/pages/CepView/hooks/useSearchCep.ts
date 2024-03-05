import { useState } from "react"
import { getCepService } from "../../../services/getCep"
import { ICep } from "../../../interfaces"
import { UseNotification } from "./useNotification"

export const useSearchCep = () => {
    const [cepData, setCepData] = useState<ICep>()
    const {notify} = UseNotification()
    const searchCep = async (valueToSearch:string) => {
        const fixedValue = valueToSearch.replace("-", "").replace("-", "")
        const response = await getCepService(fixedValue)
        if(!response?.cep){
            notify.error("cep não encontrado")
        }

        if(response) setCepData(response)
    }


    return {searchCep, cepData}
}