import React, { useState, useRef, useEffect } from "react";
import { Button, StyleSheet, Text, View, Alert } from "react-native";
import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";

interface Props {
  userChoice?: number;
  onGameOver: Function;
}
const generatRandomBetween = (
  min: number,
  max: number,
  exclude: number
): number => {
  min = Math.ceil(min);
  max = Math.ceil(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generatRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};
const GameScreen = (props: Props) => {
  const { userChoice, onGameOver } = props;
  const [currentGuess, setcurrentGuess] = useState(
    generatRandomBetween(1, 100, userChoice ? userChoice : 0)
  );
  const [rounds, setrounds] = useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(rounds);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = (direction: string) => {
    if (
      (direction === "lower" &&
        userChoice !== undefined &&
        currentGuess < userChoice) ||
      (direction === "greater" &&
        userChoice !== undefined &&
        currentGuess > userChoice)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextNumber = generatRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );

    setcurrentGuess(nextNumber);
    setrounds((curRounds) => curRounds + 1);
  };
  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title="Lower" onPress={() => nextGuessHandler("lower")} />
        <Button title="Greaterer" onPress={() => nextGuessHandler("greater")} />
      </Card>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
});
