import React from "react";
import { StyleSheet, Image } from "react-native";
import {
  Container,
  View,
  H1,
  H2,
  List,
  Text,
  Card,
  CardItem,
  Icon,
  Right,
  Left,
} from "native-base";
import CalculatorItem from "../CalculatorItem";
import styles from "./styles";
import BagImage from "../../assets/images/shopping-bag.png";
import appSettings from "../../shared/AppSettings";

export default function Calculator(props) {
  console.log(">>> BEGIN Calculator(props)");
  console.log("props: ", props);
  return (
    <React.Fragment>
      {props.result.resultItems.length === 0 ? (
        <View style={styles.emptyCalculatorContainer}>
          <Image source={BagImage} />
          <Text style={styles.emptyCalculatorText}>
            Não existem itens na calculadora, adicione para calcular a
            quantidade de lactase.
          </Text>
        </View>
      ) : (
        <React.Fragment>
          <H1 style={styles.largeTitle}>Calculadora</H1>
          <View>
            <Card style={styles.baseDoubleMarginTop}>
              <CardItem header bordered>
                <Text>Resultado</Text>
              </CardItem>
              <CardItem>
                <Left>
                  <Text>Total Lactose:</Text>
                </Left>
                <Right>
                  <Text>
                    {props.result.lactaseSum.toFixed(2).toLocaleString()}
                    {" g"}
                  </Text>
                </Right>
              </CardItem>
              <CardItem>
                <Left>
                  <Text>Total FCC:</Text>
                </Left>
                <Right>
                  <Text>
                    {props.result.necessaryFcc.toFixed(2).toLocaleString()}{" "}
                    {" FCC"}
                  </Text>
                </Right>
              </CardItem>
              <CardItem>
                <Left>
                  <Text>Total medicamento:</Text>
                </Left>
                <Right>
                  <Text>
                    {props.result.necessaryMedicineAmount.toLocaleString()}{" "}
                    {props.result.medicineDisplayName}
                  </Text>
                </Right>
              </CardItem>
            </Card>
          </View>
          <View style={styles.container}>
            <H2
              style={[styles.defaultTitleAlignment, styles.baseDoubleMarginTop]}
            >
              Itens da calculadora
            </H2>
            <List>
              {props.result.resultItems.map((item) => (
                <CalculatorItem
                  key={item.itemId}
                  id={item.itemId}
                  name={item.productName}
                  displayUnitValue={item.finalUnitValue}
                  displayUnit={item.displayUnit}
                  quantity={item.quantity}
                  imageUrl={item.imageUrl}
                  lactoseValue={item.lactoseValue}
                  onAdd={props.onAdd}
                  onRemove={props.onRemove}
                />
              ))}
            </List>
          </View>
        </React.Fragment>
      )}
    </React.Fragment>
  );
  console.log(">>> BEGIN Calculator(props)");
}
