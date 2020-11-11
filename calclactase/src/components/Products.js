import React from 'react';
import { StyleSheet } from 'react-native';
import { H1, List } from 'native-base';
import Product from './Product'

export default function Products(props) {
  return (
    <React.Fragment>
      <H1 style={estilos.listTitle}>Produtos</H1>
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

const estilos = StyleSheet.create({
  listTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 15,
    textAlign: 'center',
    flex: 0,
  },
});