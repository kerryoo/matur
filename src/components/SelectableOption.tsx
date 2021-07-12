import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import DefaultText from "./DefaultText";

interface Props {
  title: string;
  onPress: () => void;
  color: string;
  borderColor: string;
}

const SelectableOption = ({ title, onPress, color, borderColor }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        { backgroundColor: color, borderColor: borderColor },
      ]}
    >
      <DefaultText typography={"smallBody"}>{title}</DefaultText>
    </TouchableOpacity>
  );
};

export default SelectableOption;

const styles = StyleSheet.create({
  button: {
    borderWidth: 5,
    borderRadius: 15,
    width: "45%",
    marginBottom: 20,
    marginRight: "5%",
    height: 200,
    justifyContent: "flex-end",
  },
});
