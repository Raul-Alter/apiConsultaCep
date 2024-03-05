import React, { CSSProperties, ReactNode, createContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface INotificationContext {
    notify:{error:(message:string)=>void, success:(message:string)=>void},
}

export const NotificationContext = createContext<INotificationContext>({
    notify:{error:()=>null, success:()=>null},
});

interface INotificationProvider {
  children: ReactNode;
}

export const NotificationProvider: React.FC<INotificationProvider> = ({ children }) => {
    const toastStyle:CSSProperties = {backgroundColor:"#fff", color:"red"};
    
    const notify = {
        error:(message:string)=> toast.error(message, {theme:"light", style:toastStyle}) ,
        success:(message:string)=> toast.success(message, { theme:"light", style:toastStyle})
    };

    return (
        <NotificationContext.Provider value={{notify}}>
            { children }
            <ToastContainer/>
        </NotificationContext.Provider>
    );
};