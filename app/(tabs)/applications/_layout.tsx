import { Stack } from 'expo-router'
import React from 'react'

const ApplicationLayout = () => {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
                animation: "fade",
            }}
        >
            <Stack.Screen name='index' />
            <Stack.Screen name='applicationform' options={{
                presentation: 'formSheet',
                animation: 'slide_from_bottom',
                sheetAllowedDetents: [0.9],
                sheetCornerRadius: 35,
                sheetElevation : 50
            }} />
        </Stack>
    )
}

export default ApplicationLayout