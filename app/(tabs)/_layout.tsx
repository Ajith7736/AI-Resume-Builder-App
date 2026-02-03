import { colors } from '@/components/ui/colors'
import { Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'

const TabLayout = () => {


    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: colors.tailwind.indigo[500],
            headerShown: false,
            tabBarStyle: {
                backgroundColor: colors.tailwind.stone[50],
                borderTopColor: colors.tailwind.stone[300],
                borderTopWidth: 0.2,
                height: 70,
                paddingTop: 5,
                boxShadow: "0 3px 9px rgb(0,0,0,0.12)",
            },
        }} >
            <Tabs.Screen name='home'
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, size }) => <Entypo name='home' size={size} color={color} />
                }} />
            <Tabs.Screen name='settings'
                options={{
                    title: "Settings",
                    tabBarIcon: ({ color, size }) => <MaterialIcons name="settings" size={size} color={color} />
                }} />
            <Tabs.Screen name='applications'
                options={{
                    title: "Applications",
                    tabBarIcon: ({ color, size }) => <Ionicons name="document-lock-outline" size={size} color={color} />
                }} />
        </Tabs>
    )
}

export default TabLayout