import { delay } from '@/lib/customdelay'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import { Image } from 'expo-image'
import { router } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { Controller, Path, SubmitHandler, useFieldArray, useForm, useWatch } from "react-hook-form"
import { ActivityIndicator, KeyboardAvoidingView, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomText from '../../components/ui/CustomText'
import RHFInput from '../../components/ui/InputText'
import SubmitButton from '../../components/ui/SubmitButton'
import TitleBackButton from '../../components/ui/TitleBackButton'
import ImageOption from './ImageOption'
import { ProfileProps, ResumeContentProps } from '@/types/types'
import { useResumeContent } from '@/context/ResumeContentContext'
import { supabase } from '@/lib/supabase'
import { toast } from '@/lib/Toast/ToastUtility'
import { useQueryClient } from '@tanstack/react-query'
import { colors } from '@/components/ui/colors'
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated'

const Profile = () => {
    const [ModalVisible, setModalVisible] = useState(false)
    const queryclient = useQueryClient();
    const [ShowUrl, setShowUrl] = useState<{
        name: string | null,
        show: boolean
    }>({
        name: null,
        show: false
    })
    const { ResumeContent, setResumeContent, currentResumeId } = useResumeContent();
    const [image, setimage] = useState<string>(ResumeContent?.profilepic as string ?? '')

    const { control, handleSubmit, formState: { isSubmitting }, watch } = useForm<ProfileProps>({
        defaultValues: ResumeContent ? {
            email: ResumeContent.email,
            fullname: ResumeContent.fullname,
            links: ResumeContent.links,
            phonenumber: ResumeContent.phonenumber,
            professionaltitle: ResumeContent.professionaltitle,
            profilepic: ResumeContent.profilepic,
            address: ResumeContent.address
        } : undefined
    })

    const { append, remove, fields } = useFieldArray({
        control,
        name: 'links'
    })




    const links = [
        'github', 'google', 'linkedin', 'website', 'date of birth', 'nationality',
        'passport or id', 'marital status', 'military service', 'driving license',
        'gender/pronoun', 'disability', 'visa', 'height', 'links / social profiles',
        'search', 'gitbook', 'medium', 'orcid', 'skype', 'bluesky', 'threads', 'x',
        'discord', 'dribbble', 'behance', 'stack overflow', 'gitlab', 'quora',
        'facebook', 'instagram', 'wechat', 'hugging face', 'kaggle', 'youtube',
        'tiktok', 'signal', 'telegram', 'whatsapp'
    ]


    const onSubmit: SubmitHandler<ProfileProps> = async (data) => {
        try {
            await delay();

            const { error } = await supabase.from('Resume').update({
                ResumeContent: data
            }).eq('id', currentResumeId as string)

            if (error) {
                toast.error('Couldnt Save')
                console.error(error.message)
                return
            }

            queryclient.invalidateQueries({
                queryKey: ['ResumeData']
            })

            setResumeContent(data);
            router.back();
        } catch (err) {
            console.error(err);
        }
    }


    const PersonalContents: {
        label: string,
        name: Path<ProfileProps>,
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
        <SafeAreaView className='h-screen relative'>

            {ModalVisible && <Controller
                control={control}
                name='profilepic'
                render={({ field: { onChange } }) => {
                    return <ImageOption onChange={onChange} setModalVisible={setModalVisible} image={image} setimage={setimage} />
                }
                }
            />}

            <View style={{
                height: '92%'
            }}>

                <KeyboardAvoidingView
                    behavior='height'
                    keyboardVerticalOffset={10}

                >
                    <ScrollView>
                        <View
                            style={{
                                display: 'flex',
                                gap: 20,
                                margin: 20,
                                paddingBottom: 50
                            }}
                        >

                            <TitleBackButton title="Profile" />
                            <CustomText className='uppercase w-full text-center font-bold tracking-widest text-stone-500'>Photo</CustomText>

                            <View className='flex gap-3 w-full items-center justify-center'>


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
                                        render={({ field: { onChange, value } }) => {
                                            return <RHFInput placeholder={content.placeholder} value={value as string} onChange={onChange} />
                                        }}
                                    />
                                </View>
                            })}

                            {fields.map((link, indx) => {
                                return <View key={indx} className='flex relative gap-2'>
                                    <View className='flex flex-row justify-between'>
                                        <CustomText className='uppercase text-sm w-[60%] font-bold tracking-widest text-stone-500'>{link.name}</CustomText>
                                        <Pressable onPress={() => {
                                            remove(indx)
                                        }}><Text className='text-sm text-red-500' >Remove</Text></Pressable>
                                    </View>

                                    <Controller
                                        control={control}
                                        name={`links.${indx}.label`}
                                        render={({ field: { onChange, value } }) => {
                                            return <RHFInput value={value} onChange={onChange} />
                                        }}
                                    />

                                    <Pressable onPress={() => {
                                        setShowUrl({
                                            name: link.name,
                                            show: !ShowUrl.show
                                        })
                                    }} className='absolute right-2 top-8 h-10 w-10 flex items-center justify-center'>
                                        <MaterialCommunityIcons name='link' size={20} color={colors.tailwind.indigo[500]} />
                                    </Pressable>


                                    {ShowUrl.name === link.name && ShowUrl.show && <Animated.View entering={FadeIn} exiting={FadeOut} className='  absolute w-[70%] left-28 -top-3'>
                                        <Controller
                                            control={control}
                                            name={`links.${indx}.link`}
                                            render={({ field: { onChange, value } }) => {
                                                return <RHFInput onSubmitEditing={() => {
                                                    setShowUrl({
                                                        name: null,
                                                        show: false
                                                    })
                                                }} placeholder='Enter Url' shadow value={value} onChange={onChange} />
                                            }}
                                        />
                                        <Pressable onPress={() => {
                                            setShowUrl({
                                                name: null,
                                                show: false
                                            })
                                        }} className='absolute bg-indigo-500 right-1 rounded-md top-1 w-10 h-10 flex items-center justify-center'><MaterialCommunityIcons name='check' color={'white'} size={20} /></Pressable>
                                    </Animated.View>}


                                </View>
                            })}


                            <Text className=' text-sm font-bold tracking-widest '>Add Details</Text>

                            <View className='flex flex-row gap-4 flex-wrap'>
                                {links.map((link) => {
                                    return <Pressable key={link} style={{
                                        backgroundColor: colors.tailwind.stone[50],
                                        width: 'auto',
                                        padding: 4,
                                        borderWidth: 1,
                                        borderColor: colors.tailwind.indigo[200],
                                        borderRadius: 5
                                    }} onPress={() => {
                                        const exist = fields.some((field) => field.name === link)

                                        if (exist) return

                                        append({
                                            label: '',
                                            name: link,
                                            link: ''
                                        })
                                    }} >
                                        <View className='text-sm font-semibold flex flex-row items-center gap-1'><MaterialCommunityIcons name='plus' size={17} /><Text className='text-xs'>{link}</Text></View>
                                    </Pressable>
                                })}
                            </View>
                        </View>
                    </ScrollView>

                </KeyboardAvoidingView>
            </View>



            <SubmitButton className='mx-5' onPress={handleSubmit(onSubmit)}>{isSubmitting ? <View className='flex flex-row gap-2 items-center justify-center'><ActivityIndicator color={"white"} /><Text className='text-white tracking-widest font-semibold'>Saving...</Text></View> : <View className='flex flex-row justify-center gap-2 items-center'><MaterialCommunityIcons name='check' color={'white'} size={17} /><Text className='text-white font-semibold tracking-widest  text-center'>Save</Text></View>}</SubmitButton>
        </SafeAreaView>
    )
}

export default Profile

