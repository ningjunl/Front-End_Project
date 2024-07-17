import { StyleSheet, Platform } from "react-native";
const styles = StyleSheet.create({
  text: {
    color: "orange",
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontWeight: "normal",
        fontFamily: "Avenir",
      },
      android: {
        fontSize: 30,
        fontWeight: "600",
        fontFamily: "Roboto",
      },
    }),
  },
});
export default styles;
