import { useContext } from "react";
import { NotificationContext } from "../../../contexts/NotificationContext";

export const UseNotification = () =>{
    const {notify} = useContext(NotificationContext);    
    return {notify};
};