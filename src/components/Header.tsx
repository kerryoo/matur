import React from "react";
import { StyleSheet, Image, View } from "react-native";

export const HeaderLogo = () => {
    return (
      <Image source={require("../../assets/matur-logo.png")} style={{width: 100, height: 20 }} />
    )
  }
  
 export const BackButton = () => {
    return (
        <Image source={require("../../assets/back-button.png")} style={{width: 15, height: 25, marginHorizontal: 20}} />
      )
 }