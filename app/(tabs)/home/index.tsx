import { colors } from "@/components/ui/colors";
import { useSession } from "@/context/AuthContext";
import { supabase } from "@/lib/supabase";
import { toast } from "@/lib/Toast/ToastUtility";
import { Entypo, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { QueryClient, useQuery } from '@tanstack/react-query';
import clsx from "clsx";
import { Image } from "expo-image";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, Text, TextInput, TextInputProps, TextInputSubmitEditingEvent, View } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { AnimatedView } from "react-native-reanimated/lib/typescript/component/View";
import { SafeAreaView } from "react-native-safe-area-context";
import Resume from "./templates";
import ResumCard from "@/features/Home/components/ResumeCard";
import ResumeCard from "@/features/Home/components/ResumeCard";

export default function Index() {
  const queryclient = new QueryClient();
  const [editResume, seteditResume] = useState<{
    id: string | null,
    show: boolean
  }>({
    show: false,
    id: null
  })
  const [showoptions, setshowoptions] = useState<{
    id: string | null,
    show: boolean
  }>({
    show: false,
    id: null
  })
  const { session } = useSession();
  const { data, error, refetch } = useQuery({
    queryKey: ['Resumes'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('Resume')
        .select('*')
        .eq('userId', session?.user.id as string)
        .order('createdAt', { ascending: false })

      if (error) return toast.error(error.message)

      return data;
    },
  })

  // console.log(JSON.stringify(data, null, 2));


  const handlecreate = async () => {
    const { data: res, error } = await supabase.from('Resume').upsert({
      name: `Resume${data ? data.length + 1 : 1}`,
      template: '',
      userId: session?.user.id as string
    }).select('id').single();

    if (error) {
      toast.error(error.message)
    } else {
      queryclient.invalidateQueries({
        queryKey: ['Resumes']
      })
      refetch();
    }
  }

  const handledelete = async (id: string) => {
    const { error } = await supabase.from('Resume').delete().eq('id', id)
  }

  const handleoptions = (id: string) => {
    if (id !== showoptions.id) {
      setshowoptions({
        id,
        show: true
      })
    } else {
      setshowoptions({
        id,
        show: !showoptions.show
      })
    }

  }

  const handleEdit = async (e: TextInputSubmitEditingEvent, id: string) => {

    const name = e.nativeEvent.text;

    const { error } = await supabase.from('Resume').update({
      name
    }).eq('id', id)

    if (error) {
      console.error(error.message);
      toast.error(error.message)
    }

    refetch();

    seteditResume({
      id: null,
      show: false
    })
  }



  return (
    <>
      <SafeAreaView className="h-screen flex gap-5 bg-white p-5 ">

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

        <ScrollView scrollEnabled contentContainerStyle={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          width: '100%',
          height: '100%'
        }}>
          <Pressable style={{
            backgroundColor: colors.tailwind.stone[50]
          }} className=" h-[15rem] m-5 w-[10rem] rounded-md flex justify-center items-center border border-stone-300 border-dashed"
            onPress={handlecreate}
          >
            <Ionicons name="add" size={17} color={"#a8a29e"} />
            <Text className="text-stone-400 font-bold text-xs uppercase tracking-widest w-full text-center">Create Resume</Text>
          </Pressable>

          {data?.map((resume) => {
            return <ResumeCard refetch={refetch} resume={resume} key={resume.id} />
          })}



        </ScrollView>

      </SafeAreaView>

    </>
  );
}
