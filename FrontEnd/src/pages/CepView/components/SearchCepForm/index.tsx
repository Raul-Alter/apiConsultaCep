import { ChangeEvent, FC } from 'react'
import { InputText } from '../../../../components/inputText'
import { useForm } from '../../hooks/useForm';
import './index.styles.css'

interface SearchCepFormProps{
onSearch:(valueToSearch:string)=>void;
}

export const SearchCepForm:FC<SearchCepFormProps> = ({onSearch}) => {
  const {inputData, getFormData} = useForm()
  
  return (
    <div className='cep-form-container'>
        <InputText value={inputData} onChange={({target:{value}}:ChangeEvent<HTMLInputElement>) => getFormData(value)}  label='cep'/>
        <button className='search-button' onClick={()=>onSearch(inputData)}>Concultar cep</button>
    </div>
  )
}
