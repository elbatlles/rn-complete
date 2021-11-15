import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";
interface Props {
  title: string;
}

const Header = (props: Props) => {
  const { title } = props;
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 50,
    paddingTop: 20,
    backgroundColor: Colors.primary,
    alignItems: "center",
    borderBottomColor: Colors.primary,
    borderBottomWidth: 2,
  },
  headerTitle: {
    color: "black",
    fontSize: 13,
  },
});
