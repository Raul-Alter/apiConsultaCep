import { ChangeEvent, FC } from 'react'
import { InputText } from '../../../../components/inputText'
import { useForm } from '../../hooks/useForm';
import './index.styles.css'

interface SearchCepFormProps{
onSearch:(valueToSearch:string)=>void;
}

export const SearchCepForm:FC<SearchCepFormProps> = ({onSearch}) => {
  const {inputData, getFormData, error} = useForm()
  console.log(error)
  return (
    <div className='cep-form-container'>
        <InputText value={inputData} onChange={({target:{value}}:ChangeEvent<HTMLInputElement>) => getFormData(value)}  label='Numero do Cep'/>
        {error && (
          <span className='error'>{error}</span>
        )}
        <button className='search-button' onClick={()=> !error && onSearch(inputData)}>Consultar cep</button>
    </div>
  )
}
