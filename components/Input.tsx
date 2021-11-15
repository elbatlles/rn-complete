import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardTypeOptions,
  TextInputProps,
} from "react-native";

interface Props {
  style?: {};
  blurOnSubmit: boolean;
  autoCapitalize: "none" | "sentences" | "words" | "characters" | undefined;
  autoCorrect: boolean;
  keyboardType: KeyboardTypeOptions;
  maxLength: number;
  onChangeText: (text: string) => void;
  value: string;
}

const Input = (props: Props) => {
  const { style } = props;
  return <TextInput {...props} style={{ ...styles.input, ...style }} />;
};

export default Input;

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
});
