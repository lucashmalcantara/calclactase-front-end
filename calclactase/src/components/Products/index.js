import React from "react";
import { StyleSheet } from "react-native";
import { H1, List } from "native-base";
import Product from "../Product";
import styles from "./styles";

export default function Products(props) {
  return (
    <React.Fragment>
      <H1 style={styles.largeTitle}>Produtos</H1>
      <List>
        {props.productList.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            displayUnitValue={product.displayUnitValue}
            displayUnit={product.displayUnit}
            onAdd={props.onAdd}
            onRemove={props.onRemove}
          />
        ))}
      </List>
    </React.Fragment>
  );
}
