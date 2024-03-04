import { CepCard } from './components/CepCard'
import { SearchCepForm } from './components/SearchCepForm'
import { useSearchCep } from './hooks/useSearchCep'

export const CepView = () => {
  const {searchCep} = useSearchCep()
  return (
    <div>
        <CepCard/>
        <SearchCepForm onSearch={(valueToSearch)=>searchCep(valueToSearch)}/>
    </div>
  )
}
