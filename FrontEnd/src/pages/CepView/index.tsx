import { motion } from 'framer-motion'
import { CepCard } from './components/CepCard'
import { SearchCepForm } from './components/SearchCepForm'
import { useSearchCep } from './hooks/useSearchCep'
import './index.styles.css'

export const CepView = () => {
  const {searchCep, cepData} = useSearchCep()

  return (
    <div className='page'>
      <div className='content-container'>
        {cepData && cepData.cep && 
        <motion.div initial={{position:'absolute', opacity:0, left:10000}} animate={{left:0, opacity:1, position:'relative'}} transition={{duration:0.5}}>
          <CepCard data={cepData}/>
          </motion.div> }
        <SearchCepForm onSearch={(valueToSearch)=>searchCep(valueToSearch)}/>
      </div>
    </div>
  )
}
