import { FC, ReactNode } from 'react'
import './index.styles.css'
interface CardProps{
    children:ReactNode;
}
export const Card:FC<CardProps> = ({children}) => {
  return (
    <div className='card-container'>
        {children}
    </div>
  )
}
