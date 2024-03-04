import { FC, HtmlHTMLAttributes } from "react";

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
