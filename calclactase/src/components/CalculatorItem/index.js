import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { ListItem, Button, Icon, Text, Input, Content } from "native-base";
import styles from "./styles";

export default function CalculatorItem(props) {
  return (
    <ListItem style={{ alignItems: "flex-start" }}>
      <View style={styles.productInfoContainer}>
        <Text style={styles.productInfo}>{props.name}</Text>
        <Text style={styles.productInfo}>
          {props.displayUnitValue} {props.displayUnit}
        </Text>
      </View>
      <View style={{ flexDirection: "column", alignItems: "center" }}>
        <Image style={styles.tinyProductImage} source={props.imageUrl} />
        <View style={{ flexDirection: "row" }}>
          <Button
            small
            danger
            style={styles.button}
            onPress={() => props.onAdd(props.id)}
          >
            <Icon name="remove" />
          </Button>
          <Button
            small
            info
            style={styles.button}
            onPress={() => props.onAdd(props.id)}
          >
            <Icon name="add" />
          </Button>
        </View>
      </View>
    </ListItem>
  );
}
