import { colors } from "@/components/ui/colors";
import { useSession } from "@/context/AuthContext";
import { Image } from "expo-image";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {



  const { session } = useSession();
 

  // console.log(JSON.stringify(data, null, 2));


  return (
    <>
      <SafeAreaView className="h-screen flex gap-5 bg-white p-5 " >

        <View className="flex flex-row justify-between items-center">
          <View className="w-[60%]">
            <Text className="text-[25px] font-bold text-stone-700 tracking-wider">Hi {session?.user.user_metadata.name},</Text>
            <Text className="text-[12px] text-stone-400 font-bold tracking-wider">
              Welcome to your personal resume builder
            </Text>
          </View>
          <View style={{
            backgroundColor: colors.tailwind.gray[200]
          }} className="bg-stone-100 shadow-stone-400 h-14 w-14 rounded-full overflow-hidden">
            <Image
              source={session?.user.user_metadata.avatar_url ?? require('@/assets/images/person.png')}
              style={{
                height: '100%',
                width: '100%'
              }}
              contentFit="cover"
              contentPosition={'center'}
            />
          </View>
        </View>


      </SafeAreaView>

    </>
  );
}
