import React from "react";
import { StyleSheet } from "react-native";
import colors from "./colors";

export const imageStyles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    }
})

export const textStyles = StyleSheet.create({
  title: {
    color: colors.default,
    fontFamily: "Poppins_700Bold",
    fontSize: 72,
  },
  display: {
    color: colors.default,
    fontFamily: "Poppins_600SemiBold",
    fontSize: 24,
  },
  header: {
    color: colors.default,
    fontFamily: "Poppins_700Bold",
    fontSize: 16,
  },
  smallBody: {
    color: colors.default,
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
  },
  label: {
    color: colors.default,
    fontFamily: "Poppins_600SemiBold",
    fontSize: 16,
  },
  largeBody: {
    color: colors.default,
    fontFamily: "Poppins_400Regular",
    fontSize: 20,
  },
  guides: {
    color: colors.default,
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
  },
  link: {
    color: colors.interactive,
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    textDecorationLine: "underline",
    textDecorationColor: colors.interactive,
  },
})

export const componentStyles = StyleSheet.create({
  button: {
    borderRadius: 90,
    borderWidth: 3,
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    padding: 10,
    marginBottom: 20,
  }
})