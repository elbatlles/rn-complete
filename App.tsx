import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import GameOverScreen from "./screens/GameOverScreen";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  const [userNumber, setuserNumber] = useState<number>();
  const [guessRounds, setguessRounds] = useState(0);
  const startGameHandler = (selectedNumber: number) => {
    setuserNumber(selectedNumber);
    setguessRounds(0);
  };
  let content = <StartGameScreen onstartGame={startGameHandler} />;
  const gameOverHandler = (runOfRounds: number) => {
    setguessRounds(runOfRounds);
  };
  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    content = <GameOverScreen />;
  }

  return (
    <View style={styles.screen}>
      <Header title={"Adivina el numero"} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
