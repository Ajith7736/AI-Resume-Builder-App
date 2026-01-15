import React from 'react'
import { Pressable, Text } from 'react-native'

const SubmitButton = ({ children, onPress }: { children: React.ReactNode, onPress: () => void }) => {
  return (
    <Pressable className='bg-indigo-500 shadow-md p-4 rounded-md' onPress={onPress}>
      <Text className='text-white uppercase tracking-widest font-bold text-center'>{children}</Text>
    </Pressable>
  )
}

export default SubmitButton

