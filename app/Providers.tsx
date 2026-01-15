import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import TemplateProvider from '@/context/TemplateContext'
import ContentProvider from '@/context/ContentContext'
import { UserDataProvider } from '@/context/UserDataContext'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <GestureHandlerRootView>
            <SafeAreaProvider>
                <TemplateProvider>
                    <ContentProvider>
                        <UserDataProvider>
                            <BottomSheetModalProvider>
                                {children}
                            </BottomSheetModalProvider>
                        </UserDataProvider>
                    </ContentProvider>
                </TemplateProvider>
            </SafeAreaProvider>
        </GestureHandlerRootView>
    )
}

export default Providers