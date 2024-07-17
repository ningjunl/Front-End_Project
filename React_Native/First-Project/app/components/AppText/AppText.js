import React from "react";
import styles from "./styles.js";
import { Text } from "react-native";
function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

export default AppText;
