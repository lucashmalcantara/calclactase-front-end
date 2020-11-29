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
  quantityInput: {
    textAlign: 'center',
    margin: -5,
  },
  button: {
    marginLeft: 5,
    marginTop: 16,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  tinyProductImage: {
    height: 70,
    width: 70,
    resizeMode: "contain",
  },
});

export default styles;
