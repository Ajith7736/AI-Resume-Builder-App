import { colors } from "@/components/ui/colors";
import { useSession } from "@/context/AuthContext";
import { MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Link, router } from "expo-router";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BarChart } from "react-native-gifted-charts"
import { Circle, File, FileText, Target, TimerIcon, TrendingUp } from "lucide-react-native";
import { ScrollView } from "react-native";

export default function Index() {



  const { session } = useSession();

  const Today = new Date().getDay()

  const cardcontent = [
    {
      icon: <Target color={colors.tailwind.indigo[500]} />,
      label: 'Total Sent',
      value: '3',
      background: colors.tailwind.indigo[100]
    },
    {
      icon: <TrendingUp size={20} color={colors.tailwind.emerald[500]} />,
      label: 'Response Rate',
      value: '0.0%',
      background: colors.tailwind.emerald[100]
    }
  ]

  const barData = [
    { value: 5, label: 'M', frontColor: Today === 0 ? colors.tailwind.indigo[500] : colors.tailwind.stone[200] },
    { value: 4, label: 'T', frontColor: Today === 1 ? colors.tailwind.indigo[500] : colors.tailwind.stone[200] },
    { value: 1, label: 'W', frontColor: Today === 2 ? colors.tailwind.indigo[500] : colors.tailwind.stone[200] },
    { value: 4, label: 'T', frontColor: Today === 3 ? colors.tailwind.indigo[500] : colors.tailwind.stone[200] },
    { value: 2, label: 'F', frontColor: Today === 4 ? colors.tailwind.indigo[500] : colors.tailwind.stone[200] },
    { value: 1, label: 'S', frontColor: Today === 5 ? colors.tailwind.indigo[500] : colors.tailwind.stone[200] },
    { value: 6, label: 'S', frontColor: Today === 6 ? colors.tailwind.indigo[500] : colors.tailwind.stone[200] },
  ];
  const resumeData = [
    { value: 5, label: 'full stack', frontColor: colors.tailwind.indigo[500] },
    { value: 4, label: 'Backend', frontColor: colors.tailwind.indigo[500] },
    { value: 1, label: 'Software', frontColor: colors.tailwind.indigo[500] },
    { value: 4, label: 'Frontend', frontColor: colors.tailwind.indigo[500] },
    { value: 1, label: 'Devops', frontColor: colors.tailwind.indigo[500] },
  ];


  // console.log(JSON.stringify(data, null, 2));


  return (
    <>
      <SafeAreaView className="h-screen flex gap-5 bg-slate-50" >

        <ScrollView>

          <View style={{
            paddingBottom : 80
          }} className="flex gap-3 p-5">
            <View className="flex flex-row justify-between items-center">
              <View>
                <Text className="text-2xl font-extrabold tracking-widest text-slate-700">Your Stats</Text>
                <Text className="text-[12px] text-slate-500 font-bold tracking-wider">
                  Daily summary of your progress
                </Text>
              </View>
              <View style={{
                backgroundColor: colors.tailwind.gray[200]
              }} className="bg-stone-100 shadow-stone-400 h-11 w-11 rounded-full overflow-hidden">
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

            <View className="flex flex-row justify-center mt-5 gap-5">
              {cardcontent.map((card, indx) => {
                return <View key={indx} className="bg-white w-[45%] flex gap-2 border border-slate-200 rounded-[25px] p-5">
                  <View style={{
                    backgroundColor: card.background
                  }} className=" rounded-lg h-10 w-10 flex items-center justify-center">
                    {card.icon}
                  </View>
                  <Text className="font-medium tracking-widest text-slate-700">{card.label}</Text>
                  <Text className="font-extrabold text-slate-800 text-xl">{card.value}</Text>
                </View>
              })}

            </View>

            <View className="bg-white p-5 border-slate-200 rounded-[25px] border flex gap-5">
              <View className="flex flex-row justify-between items-center">
                <View className="flex flex-row gap-2 items-center">
                  <TimerIcon color={colors.tailwind.indigo[500]} />
                  <Text className="text-xl font-extrabold tracking-widest">Profile Activity</Text>
                </View>
                <View>
                  <Text className="text-xs bg-indigo-100 py-1 px-2 text-indigo-600">5 Days</Text>
                </View>
              </View>
              <View>
                <BarChart
                  barWidth={20}
                  noOfSections={3}
                  initialSpacing={10}
                  endSpacing={0}
                  barBorderRadius={4}
                  data={barData}
                  yAxisThickness={0}
                  xAxisThickness={0}
                  width={280}
                  isAnimated
                />
              </View>
            </View>

            <View className="bg-white p-5 border-slate-200 rounded-[25px] border flex gap-5">
              <View className="flex flex-row justify-between items-center">
                <View className="flex flex-row gap-2 items-center">
                  <FileText color={colors.tailwind.emerald[500]} />
                  <Text className="text-xl font-extrabold tracking-widest">Resume Success</Text>
                </View>
              </View>
              <View>
                <BarChart
                  barWidth={20}
                  noOfSections={5}
                  barBorderRadius={2}
                  initialSpacing={20}
                  spacing={40}
                  endSpacing={10}
                  xAxisLabelTextStyle={{
                    fontSize : 10,
                    letterSpacing : 1,
                    fontWeight : '600'
                  }}
                  yAxisTextStyle={{
                    fontSize : 11,
                    letterSpacing : 1,
                    fontWeight : '600'
                  }}
                  data={resumeData}
                  yAxisThickness={0}
                  xAxisThickness={0}
                  width={280}
                  isAnimated
                />
              </View>
            </View>
          </View>
        </ScrollView>

      </SafeAreaView >

    </>
  );
}
