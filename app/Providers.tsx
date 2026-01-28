import ToastComponent from '@/components/ui/toast'
import { AuthProvider } from '@/context/AuthContext'
import ContentProvider from '@/context/ContentContext'
import TemplateProvider from '@/context/TemplateContext'
import ToastProvider from '@/context/ToastContext'
import { UserDataProvider } from '@/context/UserDataContext'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'



const queryClient = new QueryClient();


const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaProvider>
                <QueryClientProvider client={queryClient}>
                    <AuthProvider>
                        <TemplateProvider>
                            <ContentProvider>
                                <UserDataProvider>
                                    <ToastProvider>
                                        <BottomSheetModalProvider>
                                            {children}
                                            <ToastComponent />
                                        </BottomSheetModalProvider>
                                    </ToastProvider>
                                </UserDataProvider>
                            </ContentProvider>
                        </TemplateProvider>
                    </AuthProvider>
                </QueryClientProvider>
            </SafeAreaProvider>
        </GestureHandlerRootView >
    )
}

export default Providers