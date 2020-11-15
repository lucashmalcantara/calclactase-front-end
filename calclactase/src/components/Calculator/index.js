import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { H1, List, Text } from "native-base";
import CalculatorItem from "../CalculatorItem";
import styles from "./styles";
import BagImage from "../../assets/images/shopping-bag.png";

export default function Calculator(props) {
  return (
    <React.Fragment>
      {props.items.length === 0 ? (
        <View style={styles.emptyCalculatorContainer}>
          <Image source={BagImage} />
          <Text style={styles.emptyCalculatorText}>
            Não existem itens na calculadora, adicione para calcular a
            quantidade de lactase.
          </Text>
        </View>
      ) : (
        <React.Fragment>
          <H1 style={styles.largeTitle}>Itens da calculadora</H1>
          <List>
            {props.items.map((item) => (
              <CalculatorItem
                key={item.id}
                id={item.id}
                name={item.product.name}
                displayUnitValue={item.product.displayUnitValue}
                displayUnit={item.product.displayUnit}
                quantity={item.quantity}
                imageUrl={item.product.imageUrl}
                onAdd={props.onAdd}
                onRemove={props.onRemove}
              />
            ))}
          </List>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
