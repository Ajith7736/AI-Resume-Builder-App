import TemplateProvider from "@/context/TemplateContext";
import { Stack } from "expo-router";
import "./globals.css";
import ContentProvider from "@/context/ContentContext";


export default function RootLayout() {
  return (
    <TemplateProvider>
      <ContentProvider>
        <Stack
          screenOptions={{
            headerShown: false,
            animation: "fade",
          }}
        />
      </ContentProvider>
    </TemplateProvider>
  );
}
