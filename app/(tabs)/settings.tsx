import TitleBackButton from "@/components/ui/TitleBackButton";
import { Themeprops } from "@/types/types";
import { useColorScheme } from "nativewind";
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

const Settings = () => {

  const { colorScheme, setColorScheme } = useColorScheme();

  const Themes: Themeprops[] = ["light", "dark"]


  return (
    <SafeAreaView className='flex-1 bg-white p-5 '>
      <TitleBackButton title="Settings" />
      {/* <Text className='m-5 text-lg font-semibold text-light-black'>Theme</Text> */}
      {/* <View className='mx-5 border border-stone-300 '>
        {Themes.map((theme) => {
          return (
            <TouchableOpacity
              activeOpacity={0.5}
              key={theme}
              className={`bg-stone-50 flex flex-row justify-between items-center border border-stone-300 border-x-0 ${theme === "light" ? "border-b-0 border-t-0" : "border-b-0"}  px-5 py-6  justify-center`}
              onPress={() => {
                console.log(theme)
                setColorScheme(theme);
              }}
            >
              <Text className={` ${colorScheme === theme ? 'text-light-black' : 'text-light-activeborder'} capitalize`}>
                {theme}
              </Text>
              <View className={`h-[2rem] w-[2rem]  ${colorScheme === theme ? 'bg-light-white' : 'bg-stone-100'} border border-stone-300 rounded-full flex justify-center items-center`}>
                {colorScheme === theme && <View className={`h-[1rem] w-[1rem] bg-stone-800 rounded-full `}>
                </View>}
              </View>
            </TouchableOpacity>
          )
        })}
      </View> */}
    </SafeAreaView>
  )
}


export default Settings