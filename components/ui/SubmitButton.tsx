import clsx from 'clsx'
import React from 'react'
import { Pressable, Text } from 'react-native'

const SubmitButton = ({ children, onPress, className }: { children: React.ReactNode, onPress: () => void, className?: string }) => {
  return (
    <Pressable className={clsx('bg-indigo-500 shadow-md h-14 flex justify-center rounded-md',className)} onPress={onPress}>
      {children}
    </Pressable>
  )
}

export default SubmitButton

