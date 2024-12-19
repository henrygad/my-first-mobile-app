import { Stack } from "expo-router";
import React from "react";
import { StatusBar } from "react-native";

export default function RootLayout() {

  const t = "dshdshdh";

  return <>
    <StatusBar barStyle={"dark-content"} />
    <Stack>
      <Stack.Screen name="index" options={{
        headerTitle: "index",
        headerShown: false,
      }} />
      <Stack.Screen name="(tabs)" options={{
        headerTitle: "Tabs",
        headerShown: false
      }} />
      <Stack.Screen name="+not-found" options={{
        title: "Oops! Not Found"
      }} />
    </Stack>
  </>;
};
