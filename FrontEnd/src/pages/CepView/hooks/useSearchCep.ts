import { useState } from "react"
import { getCepService } from "../../../services/getCep"
import { ICep } from "../../../interfaces"

export const useSearchCep = () => {
    const [cepData, setCepData] = useState<ICep>()

    const searchCep = async (valueToSearch:string) => {
        const response = await getCepService(valueToSearch)
        if(response) setCepData(response)
    }


    return {searchCep, cepData}
}