import ResumePreview from "@/features/Resume/components/ResumePreview";
import { contents } from "@/types/types";
import { colors } from "@/ui/colors";
import { Entypo, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { useColorScheme } from 'nativewind';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Resume = () => {
    const [showresume, setshowresume] = useState<boolean>(false)
    const { colorScheme } = useColorScheme()
    const iconColor = colorScheme === "light" ? colors.light.black : colors.dark.white
    const contents: contents[] = [
        {
            icon: <Ionicons name="person" size={28} color={iconColor} />,
            title: "Profile"
        },
        {
            icon: <Entypo name="graduation-cap" size={28} color={iconColor} />,
            title: "Education"
        },
        {
            icon: <MaterialCommunityIcons name="briefcase" size={28} color={iconColor} />,
            title: "Experience"
        },
        {
            icon: <MaterialCommunityIcons name="trophy" size={28} color={iconColor} />,
            title: "Skills"
        }
    ];

    return (
        <SafeAreaView className='flex-1 relative bg-light-white dark:bg-dark-black'>
            <View className="flex flex-row items-center p-5 gap-4">
                <Link href={"/home/templates"}><Ionicons name="arrow-back" size={25} color={colorScheme === "light" ? colors.light.black : colors.dark.white} /></Link>
                <Text className=' text-black dark:text-white font-bold text-2xl'> Resume</Text>
            </View>

            <Pressable className=' dark:bg-dark-inputfield bg-light-inputfield p-5 border border-light-activeborder/20 transition-all w-[60px] flex justify-center items-center absolute bottom-10 left-5 ease-in-out duration-300 rounded-md' onPress={() => setshowresume(!showresume)}>
                <MaterialCommunityIcons name="file-search-outline" size={24} color={colorScheme === "light" ? colors.light.black : colors.dark.white} />
            </Pressable>

            <View style={styles.carditem}>
                {contents.map((content) => {
                    return <Pressable key={content.title} className=" px-7 py-6 flex gap-2 items-center w-32 rounded-md border border-light-activeborder/20">
                        {content.icon}
                        <Text className="dark:text-white font-bold text-sm">{content.title}</Text>
                    </Pressable>
                })}

                  <Pressable onPress={() => router.push("/resume/content")} className="flex items-center justify-center border border-light-activeborder/20 w-32 border-dashed rounded-md">
                    <Ionicons name="add" size={25} color={iconColor} />
                </Pressable>
            </View>
            {showresume && <>
                <ResumePreview setshowresume={setshowresume} />
            </>}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    carditem: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        margin: 20,
        gap: 15
    }
})

export default Resume;