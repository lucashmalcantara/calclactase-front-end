import { StyleSheet } from "react-native";
import { general, metrics } from "../../styles";

const styles = StyleSheet.create({
  ...general,
  emptyCalculatorContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 125,
  },
  emptyCalculatorImage: {
    height: 120,
    width: 120,
    resizeMode: "contain",
  },
  emptyCalculatorText: {
    textAlign: "center",
  },
});

export default styles;
