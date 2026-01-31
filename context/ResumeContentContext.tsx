import { supabase } from "@/lib/supabase";
import { toast } from "@/lib/Toast/ToastUtility";
import { ResumeContentProps } from "@/types/types";
import { QueryClient, useQueryClient } from "@tanstack/react-query";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type ContextProps = {
    ResumeContent: Partial<ResumeContentProps> | null,
    setResumeContent: React.Dispatch<React.SetStateAction<Partial<ResumeContentProps> | null>>
    currentResumeId: string | null,
    setcurrentResumeId: React.Dispatch<React.SetStateAction<string | null>>
}

const ResumeContentContext = createContext<undefined | ContextProps>(undefined)

export const ResumeContentProvider = ({ children }: { children: ReactNode }) => {
    const [ResumeContent, setResumeContent] = useState<Partial<ResumeContentProps> | null>(null);
    const [currentResumeId, setcurrentResumeId] = useState<string | null>(null)

    return <ResumeContentContext.Provider value={{ ResumeContent, setResumeContent, currentResumeId, setcurrentResumeId }}>
        {children}
    </ResumeContentContext.Provider>
}

export function useResumeContent() {


    const ResumeContent = useContext(ResumeContentContext);

    if (!ResumeContent) {
        throw new Error("Use useResumeContent hook inside the provider")
    }

    return ResumeContent;
}

