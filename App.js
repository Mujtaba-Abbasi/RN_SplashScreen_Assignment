import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";

import SplashScreen from './src/splashScreen';

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  
  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  if(isLoading === true) return <SplashScreen/>

  return (
    <View style={styles.animationContainer}>
      <Text> Assignment 2 </Text>
      <Text> Arid No :  19-Arid-796 </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
