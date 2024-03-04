import { FC, HtmlHTMLAttributes } from "react";
import './index.styles.css'
interface InputTextProps extends HtmlHTMLAttributes<HTMLInputElement>{
label:string;
value?:string;
}

export const InputText:FC<InputTextProps> = ({label, id,...rest}) => {
  return (
    <div className="input-text-container">
        <label htmlFor={id}>{label}</label>
        <input id={id} {...rest} />
    </div>
  )
}
