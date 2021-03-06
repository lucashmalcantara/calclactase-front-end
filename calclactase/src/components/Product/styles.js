import { StyleSheet } from "react-native";
import { general } from "../../styles";

const styles = StyleSheet.create({
  ...general,
  productContainer: {
    flexDirection: "row",
  },
  productInfoContainer: {
    flex: 1,
    alignItems: "flex-start",
    marginLeft: 16,
  },
  productInfo: {
    textAlign: "left",
    alignSelf: "flex-start",
  },
  input: {
    backgroundColor: "#EAEAEA",
    height: 30,
    width: 40,
    marginLeft: 5,
  },
  button: {
    marginLeft: 5,
    marginTop: 16,
  },
  tinyProductImage: {
    height: 70,
    width: 70,
    resizeMode: "contain",
  },
});

export default styles;
