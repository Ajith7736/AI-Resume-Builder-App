import { colors } from "@/components/ui/colors";
import TitleBackButton from "@/components/ui/TitleBackButton";
import { useSession } from "@/context/AuthContext";
import { supabase } from "@/lib/supabase";
import { AntDesign, Entypo, MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Button, Pressable, Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

const Settings = () => {

  const { session } = useSession()

  const handlesignout = () => {
    supabase.auth.signOut();
  }

  return (
    <SafeAreaView className='flex-1 bg-white p-5 '>
      <TitleBackButton title="Settings" />
      <View className="mt-10 flex gap-5">
        <View style={{
          backgroundColor: colors.tailwind.stone[50],
          padding: 20,
          borderWidth: 1,
          borderColor: colors.tailwind.stone[200],
          borderRadius: 10,
          display: 'flex',
          gap: 3,
          alignItems: "center",
          boxShadow: "0 3px 10px rgb(0,0,0,0.04)"
        }}>
          <View style={{
            backgroundColor: colors.tailwind.gray[200]
          }} className="bg-stone-100 h-14 w-14 rounded-full overflow-hidden">
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
          <Text className="font-bold mt-5 text-lg">{session?.user.user_metadata.name}</Text>
          <Text className="text-stone-600 italic">{session?.user.email}</Text>
        </View>

        <View style={{
          backgroundColor: colors.tailwind.stone[50],
          borderWidth: 1,
          borderColor: colors.tailwind.stone[200],
          borderRadius: 10
        }}>
          <Pressable style={{
            display: 'flex',
            gap: 3,
            padding: 20,
            flexDirection: 'row',
            alignItems: "center",
            justifyContent: 'space-between',
            borderBottomWidth : 1,
            borderBottomColor :  colors.tailwind.stone[200],
          }}>
            <View className="flex flex-row gap-8 items-center">
              <AntDesign name="exclamation-circle" size={20} />
              <Text className="tracking-widest">About App</Text>
            </View>

            <Entypo name="chevron-right" size={20} color="black" />
          </Pressable>

           <Pressable style={{
            display: 'flex',
            gap: 3,
            padding: 20,
            flexDirection: 'row',
            alignItems: "center",
            justifyContent: 'space-between',
            borderBottomWidth : 1,
            borderBottomColor :  colors.tailwind.stone[200],
          }} onPress={handlesignout}>
            <View className="flex flex-row gap-8 items-center">
              <AntDesign name="logout" size={20} color="red" />
              <Text className="tracking-widest" style={{ color : colors.tailwind.red[500]}}>Logout</Text>
            </View>

            <Entypo name="chevron-right" size={20} color="black" />
          </Pressable>

           <Pressable style={{
            display: 'flex',
            gap: 3,
            padding: 20,
            flexDirection: 'row',
            alignItems: "center",
            justifyContent: 'space-between',
          }} >
            <View className="flex flex-row gap-7 items-center">
              <MaterialIcons name="delete-outline" size={24} color="red" />
              <Text className="tracking-widest" style={{ color : colors.tailwind.red[500]}}>Delete My Account</Text>
            </View>

            <Entypo name="chevron-right" size={20} color="black" />
          </Pressable>


        </View>

      </View>
    </SafeAreaView >
  )
}


export default Settings