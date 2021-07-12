import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
} from "react-native";
import colors from "../constants/colors";
import { textStyles } from "../constants/constantStyles";

interface Props {
  placeholder: string;
  textContentType:
    | "name"
    | "familyName"
    | "password"
    | "username"
    | "telephoneNumber";
  onChangeText: any;
  onBlur: any;
  value: string;
}

interface AdditionalProps {
  autoCorrect: boolean;
  autoCapitalize: "none" | "sentences" | "words" | "characters";
  keyboardType:
    | "default"
    | "email-address"
    | "numeric"
    | "phone-pad"
    | "ascii-capable"
    | "numbers-and-punctuation"
    | "url"
    | "number-pad"
    | "name-phone-pad"
    | "decimal-pad"
    | "twitter"
    | "web-search"
    | "visible-password";
  maxLength: number;
  spellCheck: boolean;
  secureTextEntry: boolean;
}

const FieldInput = ({
  placeholder,
  textContentType,
  onChangeText,
  onBlur,
  value,
}: Props) => {
  let additionalProps: AdditionalProps = {
    //default is for name/family name
    autoCorrect: false,
    autoCapitalize: "words",
    keyboardType: "default",
    maxLength: 30,
    spellCheck: false,
    secureTextEntry: false,
  };

  if (textContentType === "password") {
    additionalProps.autoCapitalize = "none";
    additionalProps.secureTextEntry = true;
  } else if (textContentType === "username") {
    additionalProps.autoCapitalize = "none";
  } else if (textContentType === "telephoneNumber") {
    additionalProps.keyboardType = "phone-pad";
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={textStyles.input}
        placeholder={placeholder}
        placeholderTextColor={colors.disabled}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
        textContentType={textContentType}
        {...additionalProps}
      />
    </View>
  );
};

export default FieldInput;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    flexDirection: "row",
    marginTop: 30,
    borderBottomWidth: 3,
    borderColor: colors.disabled,
    alignSelf: "center",
  },
});
