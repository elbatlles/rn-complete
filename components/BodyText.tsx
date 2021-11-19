import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  children: React.ReactNode;
  style?: {};
}

const BodyText = (props: Props) => {
  const { children, style } = props;
  return (
    <View>
      <Text style={{ ...style, ...styles.body }}>{children}</Text>
    </View>
  );
};

export default BodyText;

const styles = StyleSheet.create({
  body: {
    fontFamily: "open-sans-bold",
  },
});
