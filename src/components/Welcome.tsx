import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const WelcomeScreen: React.FC = ({ navigation }: any) => {
  const handleContinue = () => {
    navigation.replace("Recipes");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to recipe book</Text>
      <Image
        source={require("../../assets/onboard.png")}
        style={styles.image}
      />
      <Text style={styles.description}>
        Welcome to the recipe book app. Start exploring recipes and cooking.
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    opacity: 0.8,
    padding: 10,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 400,
    marginBottom: 20,
    borderRadius: 10,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
});

export default WelcomeScreen;
