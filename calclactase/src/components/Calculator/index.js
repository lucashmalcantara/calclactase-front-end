import React from "react";
import { StyleSheet } from "react-native";
import { H1, List } from "native-base";
import CalculatorItem from "../CalculatorItem";
import styles from "./styles";

export default function Calculator(props) {
  return (
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
            imageUrl={item.product.imageUrl}
            onAdd={props.onAdd}
            onRemove={props.onRemove}
          />
        ))}
      </List>
    </React.Fragment>
  );
}
