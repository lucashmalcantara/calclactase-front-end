import { StyleSheet } from "react-native";
import { general, metrics } from "../../styles";

const styles = StyleSheet.create({
  ...general,
  saveSettingsButtonContainer: {
    alignSelf: "flex-end",
    ...general.baseMargin,
  },
});

export default styles;
