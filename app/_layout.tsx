import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { LogBox, } from 'react-native';
import 'react-native-gesture-handler';
import "../lib/reanimatedConfig"; // Must be first - configures Reanimated
import "./globals.css";
import Providers from "./Providers";
import { useSession } from "@/context/AuthContext";


SplashScreen.preventAutoHideAsync();


// Disable Reanimated strict mode warnings
if (__DEV__) {
  LogBox.ignoreLogs([
    '[Reanimated] Reading from `value`',
  ]);
}

function InitialLayout() {

  const { session } = useSession();

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: "fade",
      }}
    >
      <Stack.Protected guard={!!session?.user}>
        <Stack.Screen name="(tabs)" />
      </Stack.Protected>

      <Stack.Protected guard={!session?.user}>
        <Stack.Screen name="index" />
      </Stack.Protected>

    </Stack>
  )
}



export default function RootLayout() {

  return (
    <Providers>
      <StatusBar style="light" backgroundColor="transparent" />
      <InitialLayout />
    </Providers>
  );
}
