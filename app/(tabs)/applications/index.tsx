import { colors } from '@/components/ui/colors'
import { Link } from 'expo-router'
import { Building, Calendar, ExternalLink, Plus, Search, Trash2 } from 'lucide-react-native'
import React from 'react'
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const applications = () => {
  return (
    <>
      <SafeAreaView className='h-screen relative w-full bg-slate-50 p-5'>
        <Pressable style={{
          position: 'absolute',
          bottom: 120,
          right: 30,
          zIndex : 20,
          backgroundColor: colors.tailwind.indigo[500],
          height: 60,
          width: 60,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
          boxShadow: '0px 3px 12px rgba(63, 81, 181,0.12)'
        }}>
          <Link href={'/(tabs)/applications/applicationform'}>
            <Plus color={'white'} size={38} />
          </Link>

        </Pressable>
        <ScrollView>
          <View className='flex gap-3'>
            <View>
              <Text className="text-2xl font-extrabold tracking-widest text-slate-700">Applications</Text>
              <Text className="text-[12px] text-slate-500 font-bold tracking-wider">
                Keep track of your leads
              </Text>
            </View>

            <View className='flex flex-row w-full items-center border px-2 bg-white gap-2 border-slate-200 rounded-lg  '>
              <View className='w-[10%]'>
                <Search size={18} color={colors.tailwind.slate[300]} />
              </View>
              <View className='w-full'>
                <TextInput placeholder='Search Jobs...' placeholderTextColor={colors.tailwind.slate[300]} className=' text-slate-700 w-[20rem] bg-red-500 tracking-widest' />
              </View>
            </View>

            <View className='bg-white rounded-[25px] border border-slate-200 p-5 flex flex-col gap-5'>

              <View className='flex flex-row justify-between items-center'>
                <View className='flex flex-row items-center gap-3'>
                  <View className='bg-slate-100 w-fit rounded-lg p-3'>
                    <Building color={colors.tailwind.slate[300]} />
                  </View>
                  <View>
                    <Text className='font-extrabold tracking-widest'>Company Name</Text>
                    <Text className='text-xs text-slate-500 tracking-widest'>Role Title</Text>
                  </View>
                </View>
                <View>
                  <Trash2 color={colors.tailwind.slate[300]} />
                </View>
              </View>

              <View>
                <View className='flex flex-row gap-3'>
                  <Text className='text-slate-700 font-bold tracking-widest' style={{ fontSize: 12 }}>RESUME :</Text>
                  <Text className='text-slate-700 tracking-widest' style={{ fontSize: 12 }}>Resume Name</Text>
                </View>
              </View>

              <View className='flex flex-row justify-between items-center'>
                <View>
                  <Text style={{
                    color: colors.tailwind.emerald[500],
                    backgroundColor: colors.tailwind.emerald[200],
                    borderWidth: 1,
                    borderColor: colors.tailwind.emerald[500]
                  }} className=' font-extrabold px-3 py-1 text-xs rounded-full'>OFFER</Text>
                </View>
                <View className='flex flex-row items-center gap-2'>
                  <View className='flex flex-row gap-2 items-center'>
                    <Calendar size={15} color={colors.tailwind.slate[400]} />
                    <Text className='text-slate-600 text-xs font-bold'>FEB 23</Text>
                  </View>
                  <View className='bg-slate-100 w-fit rounded-full p-3'>
                    <ExternalLink size={15} color={colors.tailwind.slate[600]} />
                  </View>
                </View>
              </View>

            </View>

          </View>
        </ScrollView>
      </SafeAreaView >
    </>
  )
}

export default applications
