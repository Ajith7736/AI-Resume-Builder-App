import TemplateProvider from "@/context/TemplateContext";
import { Stack } from "expo-router";
import * as SystemUI from "expo-system-ui";
import "./globals.css";

SystemUI.setBackgroundColorAsync("transparent");

export default function RootLayout() {
  return (
    <TemplateProvider>
        <Stack
          screenOptions={{
            headerShown: false,
            animation: "fade",
          }}
        />
    </TemplateProvider>
  );
}
