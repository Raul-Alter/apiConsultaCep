import { FC } from 'react'
import { Card } from '../../../../components/card'
import { ICep } from '../../../../interfaces'
import './index.styles.css'

interface CepCardProps {
  data?:ICep;
}

export const CepCard:FC<CepCardProps> = ({data}) => {
  return (
    <Card>
      <div className='cep-card-header'>
        <div className='cep-card-title'>
        <p>UF: {data?.uf}</p>
        </div>
      </div>
        <p className='cep-card-item'>cep: {data?.cep}</p>
        <p className='cep-card-item'>bairro: {data?.bairro}</p>
        <p className='cep-card-item'>complemento: {data?.complemento || "Não registrado"}</p>
        <p className='cep-card-item'>DDD: {data?.ddd}</p>
        <p className='cep-card-item'>Localidade: {data?.localidade}</p>
        <p className='cep-card-item'>Logradouro: {data?.logradouro}</p>
    </Card>
  )
}
