import { Ionicons } from '@expo/vector-icons'
import clsx from 'clsx'
import { router } from 'expo-router'
import React from 'react'
import { Pressable, Text } from 'react-native'

const TitleBackButton = ({ title, className }: { title: string | undefined, className?: string }) => {
    return (
        <Pressable onPress={() => router.back()} className={clsx("flex flex-row items-center gap-4", className)}>
            <Ionicons name="arrow-back" size={25} color={'black'} />
            <Text className=' text-black font-bold text-2xl'>{title}</Text>
        </Pressable>
    )
}

export default TitleBackButton