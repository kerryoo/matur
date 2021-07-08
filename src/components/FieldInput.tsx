import React, {useState} from "react";
import { StyleSheet, TouchableOpacity, Text, View, TextInput } from "react-native";
import { DefaultText } from "./DefaultText";
import colors from "../constants/colors";
import {textStyles} from "../constants/constantStyles";

interface Props {
  placeholder: string;
  textContentType: "name" | "familyName" | "password" | "username";
  startingCharacter?: string;
  onChangeText: any;
  value: string;
}

const FieldInput = ({
  placeholder,
  textContentType,
  startingCharacter,
  onChangeText,
  value,
}: Props) => {
  return (
    <View style={styles.container}>
      <DefaultText typography="display" style={{alignItems: "center"}}>{startingCharacter}</DefaultText>
      <TextInput
        style={textStyles.input}
        placeholder={placeholder}
        placeholderTextColor={colors.disabled}
        onChangeText={onChangeText}
        value={value}
        textContentType={textContentType}
      />
    </View>
  );
};

export default FieldInput;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: "5%",
    marginTop: 30,
    borderBottomWidth: 3,
    borderColor: colors.default,
  },
});
