import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { ListItem, Button, Icon, Text, Input } from "native-base";
import Logo from "../../assets/images/logo-calclactase.png";
import Teste from "../../assets/images/products/powdered-milk.jpeg";
import styles from "./styles";

export default function Product(props) {
  // const [campo, setCampo] = useState(props.descricao);
  // const [altera, setAltera] = useState(false);

  // const confirma = () => {
  //   setAltera(false);
  //   props.onAltera(props.id, campo);
  // };

  return (
    <ListItem style={{ alignItems: "flex-start" }}>
      <View style={styles.productInfoContainer}>
        <Text style={styles.productInfo}>{props.name}</Text>
        <Text style={styles.productInfo}>
          {props.displayUnitValue} {props.displayUnit}
        </Text>
      </View>
      <View style={{ flexDirection: "column", alignItems: "center" }}>
        <Image style={styles.tinyProductImage} source={Teste} />
        <Button
          small
          info
          style={styles.button}
          onPress={() => props.onAdd(props.id)}
        >
          <Text>ADICIONAR</Text>
        </Button>
      </View>
    </ListItem>
  );
}
