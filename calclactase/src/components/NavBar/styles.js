import { StyleSheet } from "react-native";
import { general } from "../../styles";

const styles = StyleSheet.create({
  ...general,
  leftArea: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    flex: 1,
    height: 40,
    resizeMode: "contain",
  },
});

export default styles;
