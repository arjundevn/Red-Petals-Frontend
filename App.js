import { Center, extendTheme, NativeBaseProvider, VStack } from "native-base";
import React from "react";
// import AppLayout from "./src/appLayout";
import Login from "./components/loginPage";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Center _dark={{ bg: "blueGray.900" }} px={4} flex={1}>
        <VStack space={5} alignItems="center">
          <Login />
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
}
