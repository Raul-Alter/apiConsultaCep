import { getCepService } from "../../../services/getCep"

export const useSearchCep = () => {

    const searchCep = async (valueToSearch:string) => {
        const response = await getCepService(valueToSearch)
        console.log(response)
    }


    return {searchCep}
}