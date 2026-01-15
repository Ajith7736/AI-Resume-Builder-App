import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useColorScheme } from "nativewind";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {

  const { colorScheme } = useColorScheme();


  return (
    <>
      <SafeAreaView className="h-screen flex gap-5 bg-white p-5 ">

        <View className="flex flex-row justify-between items-center">
          <View className="w-[60%]">
            <Text className="text-[25px] font-bold text-stone-700 tracking-wider">Hi There,</Text>
            <Text className="text-[12px] text-stone-400 font-bold tracking-wider">
              Welcome to your personal resume builder
            </Text>
          </View>
          <View className="bg-stone-100 shadow-md shadow-stone-400 h-14 w-14 rounded-full">

          </View>
        </View>

        <Pressable className="bg-stone-100 shadow-md shadow-stone-400 h-[15rem] m-5 w-[10rem] rounded-md flex justify-center items-center border border-stone-300 border-dashed"
          onPress={() => router.push("/(tabs)/home/templates")}
        >
          <Ionicons name="add" size={17} color={"#a8a29e"} />
          <Text className="text-stone-400 font-bold text-xs uppercase tracking-widest w-full text-center">Create Resume</Text>
        </Pressable>

      </SafeAreaView>

    </>
  );
}
