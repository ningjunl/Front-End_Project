import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  button: {
    padding: 10,
    alignItems: "center",
    width: "100%",
    borderRadius: 50,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
  },
});

export default styles;
