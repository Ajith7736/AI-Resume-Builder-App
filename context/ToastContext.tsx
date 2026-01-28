import { setToastRef, toast } from "@/lib/Toast/ToastUtility";
import { createContext, ReactNode, useContext, useState } from "react";


interface ToastProps {
    isvisible: boolean,
    setisvisible: React.Dispatch<React.SetStateAction<boolean>>,
    Toastmessage: string,
    setToastmessage: React.Dispatch<React.SetStateAction<string>>,
    type: 'success' | 'error',
    settype: React.Dispatch<React.SetStateAction<'success' | 'error'>>,
}


const ToastContext = createContext<ToastProps | undefined>(undefined)

export default function ToastProvider({ children }: { children: ReactNode }) {

    const [isvisible, setisvisible] = useState<boolean>(false)

    const [Toastmessage, setToastmessage] = useState<string>('')

    const [type, settype] = useState<'success' | 'error'>('success');

    const value = { setisvisible, setToastmessage, settype }

    setToastRef(value);

    return <ToastContext.Provider value={{ isvisible, setisvisible, setToastmessage, Toastmessage, type, settype }}>
        {children}
    </ToastContext.Provider>
}

export function useToast() {
    const data = useContext(ToastContext);
    if (!data) {
        throw new Error('Use useToast hook inside the provider')
    }

    return data;
}