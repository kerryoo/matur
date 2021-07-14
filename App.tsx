import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  HeaderBackButton,
} from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import ModalScreen from "./src/screens/ModalScreen";
import ExploreScreen from "./src/screens/ExploreScreen";
import FeedScreen from "./src/screens/FeedScreen";
import LibraryScreen from "./src/screens/LibraryScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import RecipeLibraryScreen from "./src/screens/RecipeLibraryScreen";
import RecipeScreen from "./src/screens/RecipeScreen";
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
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Library" component={LibraryScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

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
      <MainStack.Screen
        name="Home"
        component={Tabs}
        options={{
          headerLeft: () => null,
          headerTransparent: false,
        }}
      />
      <MainStack.Screen 
        name="RecipeLibrary"
        component={RecipeLibraryScreen}
        options={{
          headerTransparent: false,
        }}
      />
      <MainStack.Screen 
        name="Recipe"
        component={RecipeScreen}
        options={{
          headerTransparent: false,
        }}
      />
      
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
              gestureResponseDistance: { vertical: 1000 },
              cardStyle: { backgroundColor: colors.transparent },
              gestureDirection: "vertical",
            }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    );
  }
}
