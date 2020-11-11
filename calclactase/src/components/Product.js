import React, { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { ListItem, Button, Icon, Text, Input } from 'native-base';
import Logo from '../assets/images/logo-calclactase.png';

export default function Product(props) {
  // const [campo, setCampo] = useState(props.descricao);
  // const [altera, setAltera] = useState(false);

  // const confirma = () => {
  //   setAltera(false);
  //   props.onAltera(props.id, campo);
  // };

  return (
    <ListItem style={{ alignItems: 'flex-start' }}>
      <View style={styles.productInfoContainer}>
        <Text style={styles.productInfo}>{props.name}</Text>
        <Text style={styles.productInfo}>{props.displayUnitValue} {props.displayUnit}</Text>
      </View>
      <View style={{ flexDirection: 'column', alignItems: 'center' }}>
        <Image
          style={styles.tinyProductImage}
          source={Logo} />
        <Button small info style={styles.button} onPress={() => props.onAdd(props.id)}>
          <Text>ADICIONAR</Text>
        </Button>
      </View>
    </ListItem>
  );
}

const styles = StyleSheet.create({
  productContainer: {
    flexDirection: 'row'
  },
  productInfoContainer: {
    flex: 1,
    alignItems: 'flex-start',
    marginLeft: 16
  },
  productInfo: {
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
  input: {
    backgroundColor: '#EAEAEA',
    height: 30,
    width: 40,
    marginLeft: 5,
  },
  button: {
    marginLeft: 5,
    marginTop: 16
  },
  tinyProductImage: {
    height: 60,
    width: 60,
    resizeMode: 'contain',
  },
});