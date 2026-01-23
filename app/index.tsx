import SubmitButton from "@/components/ui/SubmitButton";
import { Image } from "expo-image";
import { Redirect } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
    return (
        <SafeAreaView className="min-h-screen flex flex-col items-center justify-between p-10 ">
            <View className="flex w-full ">
                <Text className="text-center text-3xl font-bold tracking-widest w-full text-stone-700">Welcome</Text>
                <Text className="text-center tracking-widest italic text-stone-600"> Sign in to start building your first professional resume.</Text>
            </View>

            <View className="flex flex-row gap-8">
                <View style={{
                    height: 300,
                    width: 200,
                    boxShadow: '0 3px 10px rgba(0,0,0,0.09)'
                }}>
                    <Image
                        source={require('@/assets/images/resume3.webp')}
                        style={{
                            height: 300,
                            width: 200
                        }}
                    />
                </View>
                <View style={{
                    height: 300,
                    width: 200,
                    boxShadow: '0 3px 10px rgba(0,0,0,0.09)'
                }}>
                    <Image
                        source={require('@/assets/images/resume4.webp')}
                        style={{
                            height: 300,
                            width: 200
                        }}
                    />
                </View>
                <View style={{
                    height: 300,
                    width: 200,
                    boxShadow: '0 3px 10px rgba(0,0,0,0.09)'
                }}>
                    <Image
                        source={require('@/assets/images/resume5.webp')}
                        style={{
                            height: 300,
                            width: 200
                        }}
                    />
                </View>
            </View>
            <View className="flex flex-row gap-8">
                <View style={{
                    height: 300,
                    width: 200,
                    boxShadow: '0 3px 10px rgba(0,0,0,0.09)'
                }}>
                    <Image
                        source={require('@/assets/images/resume1.webp')}
                        style={{
                            height: 300,
                            width: 200
                        }}
                    />
                </View>
                <View style={{
                    height: 300,
                    width: 200,
                    boxShadow: '0 3px 10px rgba(0,0,0,0.09)'
                }}>
                    <Image
                        source={require('@/assets/images/resume.webp')}
                        style={{
                            height: 300,
                            width: 200
                        }}
                    />
                </View>
                <View style={{
                    height: 300,
                    width: 200,
                    boxShadow: '0 3px 10px rgba(0,0,0,0.09)'
                }}>
                    <Image
                        source={require('@/assets/images/resume2.webp')}
                        style={{
                            height: 300,
                            width: 200
                        }}
                    />
                </View>
            </View>

            <View>
                <Pressable className="bg-indigo-500 py-5 px-8 rounded-md flex flex-row items-center gap-4">
                    <Text className="text-white tracking-widest font-semibold">Sign in with Google</Text>
                    <Image
                        source={require('@/assets/images/google.png')}
                        style={{
                            height: 20,
                            width: 20
                        }}
                    />
                </Pressable>
            </View>

        </SafeAreaView>
    )
}
