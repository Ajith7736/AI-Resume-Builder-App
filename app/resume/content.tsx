import CustomText from '@/ui/CustomText'
import React from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const content = () => {
  return (
    <SafeAreaView className='flex-1 bg-light-white dark:bg-dark-black'>
      <CustomText className='text-2xl m-5 font-extrabold'>Add Content</CustomText>
      <View className='m-5 bg-light-activeborder/20 p-8 flex gap-4'>
        <CustomText className='text-lg'>Education</CustomText>
        <CustomText>vel recusandae magnam provident consectetur, fugit explicabo facere ex. Alias molestias earum possimus deleniti?</CustomText>
      </View>
    </SafeAreaView>
  )
}

export default content