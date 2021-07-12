import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { imageStyles } from "../constants/constantStyles";
import  DefaultText  from "../components/DefaultText";
import RoundButton from "../components/RoundButton";


const SignInScreen = ({ navigation }) => {
  return (
    <View style={styles.background}>
      <ImageBackground
        source={require("../../assets/welcome-screen-background-image.png")}
        style={imageStyles.backgroundImage}
      >
        <View style={styles.container}>
          <DefaultText typography={"display"}>Sign in to Matur!</DefaultText>
          <RoundButton title="Sign In" onPress={() => navigation.navigate("HomeScreen")}/>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
