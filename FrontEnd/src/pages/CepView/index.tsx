import { CepCard } from './components/CepCard'
import { SearchCepForm } from './components/SearchCepForm'
import { useSearchCep } from './hooks/useSearchCep'
import './index.styles.css'

export const CepView = () => {
  const {searchCep, cepData} = useSearchCep()
  return (
    <div className='page'>
      <div className='content-container'>
        {cepData &&<CepCard data={cepData}/>}
        <SearchCepForm onSearch={(valueToSearch)=>searchCep(valueToSearch)}/>
      </div>
    </div>
  )
}
