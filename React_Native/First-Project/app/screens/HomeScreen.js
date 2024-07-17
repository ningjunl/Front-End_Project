import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>导航页</Text>
      <Button
        title="WelcomeScreen"
        onPress={() => navigation.navigate("Page1")}
      />
      <Button
        title="ViewImageScreen"
        onPress={() => navigation.navigate("Page2")}
      />
      <Button title="ListScreen" onPress={() => navigation.navigate("Page3")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default HomeScreen;
