import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";

interface Props {
  children: React.ReactNode;
}

const NumberContainer = (props: Props) => {
  const { children } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.accent,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    color: Colors.accent,
    fontSize: 22,
  },
});
