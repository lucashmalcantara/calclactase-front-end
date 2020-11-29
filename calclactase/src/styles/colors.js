import { Platform } from "react-native";

const colors = {
  header: "#333333",
  primary: "#069",
  background: "#fff",
  selectedTabIcon: Platform.OS === "ios" ? "#5e5e5e" : "white",
  notSelectedTabIcon: Platform.OS === "ios" ? "#b5b5b5" : "#d6d6d6",
};

export default colors;
