import { UseTemplate } from "@/context/TemplateContext";
import { FontAwesome6 } from "@expo/vector-icons";
import clsx from "clsx";
import { router } from "expo-router";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";


const Resume = () => {
    const [template, settemplate] = useState("")
    const { setcurrenttemplate } = UseTemplate();

    const Templates = ['Template 1', 'Template 2']


    return (
        <SafeAreaView className='h-screen-safe bg-white relative'>
            <Text className='m-5 tracking-widest uppercase font-extrabold text-center'>Select Template</Text>
            <View className="flex flex-row items-center justify-center">
                {Templates.map((item, indx) => {
                    return <Pressable key={indx} className={clsx(`bg-stone-100 h-[15rem] m-5 w-[10rem] rounded-md flex justify-center items-center border shadow-md transition-all duration-300 `, template === item ? "border-blue-500/70" : "border-stone-200")}
                        onPress={() => {
                            settemplate(item)
                        }}
                    >
                        <Text className="text-stone-400 text-sm uppercase tracking-widest w-full text-center font-bold">{item}</Text>
                    </Pressable>
                })}
            </View>
            {template && <Animated.View entering={FadeIn} exiting={FadeOut} className={"absolute bottom-20 right-10"}><Pressable className="bg-indigo-500 py-4 w-[10rem] rounded-md flex flex-row justify-center items-center gap-2"
                onPress={() => {
                    setcurrenttemplate(template)
                    router.push("/resume")
                }}
            >
                <Text className="text-white font-extrabold tracking-widest uppercase">Continue</Text>
                <FontAwesome6 name="angle-right" color={"white"} size={15} />
            </Pressable>
            </Animated.View>}

        </SafeAreaView>
    )
}

export default Resume

