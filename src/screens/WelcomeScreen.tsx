import React from "react";
import { ImageBackground, Text, View, StyleSheet } from "react-native";
import { imageStyles } from "../constants/constantStyles";
import RoundButton from "../components/RoundButton";
import { DefaultText } from "../components/DefaultText";

export const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.background}>
      <ImageBackground
        source={require("../../assets/welcome-screen-background-image.png")}
        style={imageStyles.backgroundImage}
      >
        <View style={styles.container}>
          <DefaultText typography="display">Welcome to Matur!</DefaultText>
          <DefaultText typography="smallBody">
            Explore food cultures from all across the world 
          </DefaultText>
          <RoundButton title="Sign Me In" onPress={() => console.log("lol")} />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: "5%",
  },
});
