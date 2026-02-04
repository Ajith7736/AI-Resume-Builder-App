import { AuthProvider } from '@/context/AuthContext'
import ToastProvider from '@/context/ToastContext'
import ToastComponent from '@/lib/Toast/toast'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'



const queryClient = new QueryClient();


const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
            <SafeAreaProvider>
                <QueryClientProvider client={queryClient}>
                    <AuthProvider>
                                <ToastProvider>
                                    <BottomSheetModalProvider>
                                        {children}
                                        <ToastComponent />
                                    </BottomSheetModalProvider>
                                </ToastProvider>
                    </AuthProvider>
                </QueryClientProvider>
            </SafeAreaProvider>
    )
}

export default Providers