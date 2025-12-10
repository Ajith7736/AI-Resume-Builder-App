import { createContext, ReactNode, useContext, useState } from "react";

interface Contentprops {
    contents: string[] | null,
    setcontents: React.Dispatch<React.SetStateAction<string[] | null>>
}


const ContentContext = createContext<Contentprops | undefined>(undefined)


export default function ContentProvider({ children }: { children: ReactNode }) {
    const [contents, setcontents] = useState<string[] | null>(null)
    return <ContentContext.Provider value={{ contents, setcontents }}>
        {children}
    </ContentContext.Provider>
}

export const useContent = () => {
    const data = useContext(ContentContext);
    if(!data){
        throw new Error("Use useContent inside the Provider")
    }

    return data;
}