import { useUserData } from '@/context/UserDataContext'
import { delay } from '@/lib/customdelay'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import { zodResolver } from "@hookform/resolvers/zod"
import { Image } from 'expo-image'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { Controller, Path, useForm } from "react-hook-form"
import { ActivityIndicator, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import CustomText from '../../components/ui/CustomText'
import RHFInput from '../../components/ui/InputText'
import SubmitButton from '../../components/ui/SubmitButton'
import TitleBackButton from '../../components/ui/TitleBackButton'
import ImageOption from './ImageOption'
import { UserInput } from '@/types/types'

const Profile = () => {
    const [ModalVisible, setModalVisible] = useState(false)
    const [image, setimage] = useState<string>('')

    const { userdata, setuserdata } = useUserData();


    const { control, handleSubmit, formState: { isSubmitting }, watch } = useForm<UserInput>({
        defaultValues: userdata ,
    })



    const onSubmit = async (data: any) => {
        await delay();
        console.log(data);
        setuserdata(data);
        router.back();
    }


    const PersonalContents: {
        label: string,
        name: Path<UserInput>,
        placeholder: string
    }[] = [
            {
                label: "Full Name",
                name: "fullname",
                placeholder: "Full Name"
            },
            {
                label: "Professional Title",
                name: "professionaltitle",
                placeholder: "Professional Title"
            },
            {
                label: "Email",
                name: "email",
                placeholder: "Email"
            },
            {
                label: "Phone Number",
                name: "phonenumber",
                placeholder: "Phone Number"
            },
            {
                label: "Address",
                name: "address",
                placeholder: "Address"
            }
        ]


    return (
        <SafeAreaView className=' flex relative justify-between h-screen pb-3 gap-5'>

            <ImageOption ModalVisible={ModalVisible} setModalVisible={setModalVisible} image={image} setimage={setimage} />

            <ScrollView contentContainerStyle={{
                display: 'flex',
                gap: 20,
                margin: 20,
                paddingBottom: 30
            }}>


                <TitleBackButton title="Profile" />

                <View className='flex gap-3 w-full items-center justify-center'>
                    <CustomText className='uppercase w-20 text-center font-bold tracking-widest text-stone-500'>Photo</CustomText>
                    <Pressable onPress={() => setModalVisible(true)} className='h-32 relative w-32 bg-stone-200 rounded-full flex items-center justify-center'>
                        <View className='h-32 relative w-32 overflow-hidden bg-stone-200 rounded-full flex items-center justify-center'>
                            {image ? <>
                                <Image
                                    source={image}
                                    style={{
                                        height: '100%',
                                        width: '100%'
                                    }}
                                    contentFit="cover"
                                    contentPosition={'center'}
                                />

                            </>
                                :
                                <FontAwesome name="user" size={54} color="white" />
                            }

                        </View>
                        <TouchableOpacity onPress={() => setModalVisible(true)} className='absolute bg-white h-8 w-8 rounded-full bottom-0 right-0  z-50 flex items-center justify-center'>
                            <FontAwesome name="camera" size={15} color="black" className='' />
                        </TouchableOpacity>
                    </Pressable>
                </View>

                {PersonalContents.map((content, indx) => {
                    return <View key={indx} className='flex gap-2'>

                        <CustomText className='uppercase text-sm font-bold tracking-widest text-stone-500'>{content.label}</CustomText>
                        <Controller
                            control={control}
                            name={content.name}
                            render={({ formState: { errors }, field: { onChange, value } }) => {
                                return <RHFInput placeholder={content.placeholder} value={value as string} onChange={onChange} />
                            }}
                        />
                    </View>
                })}


            </ScrollView>

            <SubmitButton className='mx-5' onPress={handleSubmit(onSubmit)}>{isSubmitting ? <View className='flex flex-row gap-5 items-center justify-center'><ActivityIndicator color={"white"} /><Text className='text-white tracking-widest font-semibold'>Saving...</Text></View> : <View className='flex flex-row justify-center gap-2 items-center'><MaterialCommunityIcons name='check' color={'white'} size={17} /><Text className='text-white font-semibold tracking-widest  text-center'>Save</Text></View>}</SubmitButton>
        </SafeAreaView>
    )
}

export default Profile

