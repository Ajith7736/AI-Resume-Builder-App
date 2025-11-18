import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {

  return <SafeAreaView className={'flex-1 bg-light-white dark:bg-dark-black'}>
    <Stack screenOptions={{ headerShown : false, animation: "fade" }}>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="templates" options={{ title: "Template" }} />
    </Stack>
  </SafeAreaView>
}
