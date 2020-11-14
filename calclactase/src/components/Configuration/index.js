import React from "react";
import { StyleSheet, Linking } from "react-native";
import {
  H1,
  Form,
  Item,
  Picker,
  Label,
  Input,
  Icon,
  Card,
  CardItem,
  Text,
  Body,
  List,
  ListItem,
  Left,
  Right,
  Button,
} from "native-base";

import styles from "./styles";

export default function Configuration(props) {
  return (
    <React.Fragment>
      <H1 style={styles.largeTitle}>Configurações</H1>
      <Form>
        <Item picker>
          <Picker
            mode="dropdown"
            iosIcon={<Icon name="arrow-down" />}
            style={{ width: undefined }}
            placeholder="Selecione o tipo de medicamento"
            placeholderStyle={{ color: "#bfc6ea" }}
            placeholderIconColor="#007aff"
            // selectedValue={this.state.selected2}
            // onValueChange={this.onValueChange2.bind(this)}
          >
            <Picker.Item label="Comprimido" value="key0" />
            <Picker.Item label="Gota" value="key1" />
          </Picker>
        </Item>
        <Item floatingLabel>
          <Label>Medida em FCC</Label>
          <Input />
        </Item>
      </Form>

      <Card style={styles.baseTopMargin}>
        <CardItem header bordered>
          <Text>Exemplos de medicamentos</Text>
        </CardItem>
        <CardItem
          button
          onPress={() => Linking.openURL("http://lacday.com.br/")}
        >
          <Left>
            <Text>Lacday: comprimidos de 10.000</Text>
          </Left>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </CardItem>
        <CardItem
          button
          onPress={() =>
            Linking.openURL("https://consultaremedios.com.br/laclev/bula")
          }
        >
          <Left>
            <Text>LacLev: comprimidos de 9.000 FCC</Text>
          </Left>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </CardItem>
        <CardItem
          button
          onPress={() => Linking.openURL("https://www.apsen.com.br/lactosil/")}
        >
          <Left>
            <Text>Lactosil: comprimidos de 10.000</Text>
          </Left>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </CardItem>
        <CardItem
          button
          onPress={() =>
            Linking.openURL(
              "https://www.cliquefarma.com.br/preco/deslac-lactase-gotas-15ml/bula#descricao-do-produto"
            )
          }
        >
          <Left>
            <Text>Deslac Lactase: gotas de 500 FCC</Text>
          </Left>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </CardItem>
      </Card>
    </React.Fragment>
  );
}
