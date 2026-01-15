import React from 'react'
import { Controller, Path, useForm } from "react-hook-form"
import { ActivityIndicator, Pressable, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomText from '../ui/CustomText'
import SubmitButton from '../ui/SubmitButton'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useUserData } from '@/context/UserDataContext'
import RHFInput from '../ui/InputText'
import { Link, router } from 'expo-router'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import TitleBackButton from '../ui/TitleBackButton'

const Profile = () => {

    type ProfileInput = z.infer<typeof ProfileSchema>
    const { userdata, setuserdata } = useUserData();

    const ProfileSchema = z.object({
        fullname: z.string().min(1, "This field is required"),
        professionaltitle: z.string().min(1, "This field is required"),
        email: z.email("Invalid email address").min(1, "This field is required"),
        phonenumber: z.string().min(1, "This field is required"),
        address: z.string().min(1, "This field is required"),
    })


    const { control, handleSubmit, formState: { isSubmitting } } = useForm<ProfileInput>({
        defaultValues: {
            fullname: "",
            professionaltitle: "",
            email: "",
            phonenumber: "",
            address: ""
        },
        resolver: zodResolver(ProfileSchema)
    })


    const delay = () => new Promise(resolve => setTimeout(resolve, 1000))

    const onSubmit = async (data: any) => {
        await delay();
        console.log(data);
        setuserdata(data);
    }


    const PersonalContents: {
        label: string,
        name: Path<ProfileInput>,
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
        <SafeAreaView className='m-5 flex justify-between h-screen pb-14 gap-5'>
            <View className='flex gap-5'>
                <TitleBackButton title="Profile" />
                {PersonalContents.map((content, indx) => {
                    return <View key={indx} className='flex gap-2'>

                        <CustomText className='uppercase text-sm font-bold tracking-widest text-stone-500'>{content.label}</CustomText>
                        <Controller
                            control={control}
                            name={content.name}
                            render={({ formState: { errors }, field: { onChange, value } }) => {
                                return <RHFInput placeholder={content.placeholder} errors={errors[content.name]?.message} value={value} onChange={onChange} />
                            }}
                        />
                    </View>
                })}
            </View>

            <SubmitButton onPress={handleSubmit(onSubmit)}>{isSubmitting ? <View className='animate-spin'><ActivityIndicator color={"white"} /></View> : <>Submit</>}</SubmitButton>
        </SafeAreaView>
    )
}

export default Profile

