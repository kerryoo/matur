import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  HeaderBackButton,
} from "@react-navigation/stack";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import ModalScreen from "./src/screens/ModalScreen";
import HomeScreen from "./src/screens/HomeScreen";
import AppLoading from "expo-app-loading";
import { BackButton, HeaderLogo } from "./src/components/Header";
import colors from "./src/constants/colors";

import {
  useFonts,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from "@expo-google-fonts/poppins";

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitle: () => <HeaderLogo />,
        headerBackImage: () => <BackButton />,
        headerBackTitleVisible: false,
      }}
    >
      <MainStack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen name="SignIn" component={SignInScreen} />
      <MainStack.Screen name="SignUp" component={SignUpScreen} />
      <MainStack.Screen name="HomeScreen" component={HomeScreen}/>
    </MainStack.Navigator>
  );
};

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <RootStack.Navigator
          mode="modal"
          screenOptions={{ headerShown: false }}
        >

          <RootStack.Screen name="Main" component={MainStackScreen} />
          <RootStack.Screen
            name="MyModal"
            component={ModalScreen}
            options={{
              cardOverlayEnabled: true,
              gestureEnabled: true,
              gestureResponseDistance: {vertical: 1000},
              cardStyle: { backgroundColor: colors.transparent },
              gestureDirection: "vertical",
            }}
          />

        </RootStack.Navigator>
      </NavigationContainer>
    );
  }
}
