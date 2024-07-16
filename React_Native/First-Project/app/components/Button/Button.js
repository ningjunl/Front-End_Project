import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import colors from "../../config/colors.js";
import styles from "./styles.js";
function AppButton({ title, onPress, color = colors.primary }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: color }]}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
export default AppButton;
