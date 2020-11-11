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
    <ListItem>
      <Image
        style={styles.tinyProductImage}
        source={Logo}
      />
      <View style={{ flex: 1 }}>
        <View style={styles.productInfoContainer}>
          <Text style={styles.productInfo}>{props.name}</Text>
          <Text style={styles.productInfo}>{props.displayUnitValue} {props.displayUnit}</Text>
        </View>

        <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
          <Button small danger style={styles.button} onPress={() => props.onRemove(props.id)}>
            <Icon type="FontAwesome" name="minus" />
          </Button>
          {/* <Input
              style={styles.input}
              defaultValue={props.quantity}
              // onChangeText={(campo) => setCampo(campo)}
              // onSubmitEditing={confirma}
              autoFocus
            /> */}
          <Button small info style={styles.button} onPress={() => props.onAdd(props.id)}>
            <Icon type="FontAwesome" name="plus" />
          </Button>
        </View>
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
  },
  tinyProductImage: {
    height: 60,
    width: 60,
    resizeMode: 'contain',
  },
});