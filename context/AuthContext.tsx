import { delay } from "@/lib/customdelay";
import { supabase } from "@/lib/supabase";
import { Session } from "@supabase/supabase-js";
import { useRouter, useSegments } from "expo-router";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

const AuthContext = createContext<{ session: Session | null, isLoading: boolean }>({ session: null, isLoading: true });

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isLoading, setisLoading] = useState(true)
    const [session, setsession] = useState<Session | null>(null);
    const segment = useSegments();
    const router = useRouter();
    const protectedRoutes = new Set(['(tabs)', 'resume']);

    useEffect(() => {

        supabase.auth.getSession().then(async ({
            data: { session }
        }) => {
            setsession(session)
            setisLoading(false)
        })

        const { data: AuthListener } = supabase.auth.onAuthStateChange(async (
            _event, session
        ) => {
            setsession(session);
            setisLoading(false)
        })

        return () => {
            AuthListener.subscription.unsubscribe();
        }
    }, [])

    useEffect(() => {
        if (isLoading) return;

        if (!session && protectedRoutes.has(segment[0])) {
            router.replace('/')
        } else if (session && !protectedRoutes.has(segment[0])) {
            router.replace('/(tabs)/home')
        }

    }, [session, segment, isLoading])



    return (
        <AuthContext.Provider value={{ session, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useSession = () => {
    const { session, isLoading } = useContext(AuthContext);
    return { session, isLoading };
}