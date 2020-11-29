import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { ListItem, Button, Text, Input, Item } from "native-base";
import styles from "./styles";
import { FontAwesome5 } from "@expo/vector-icons";

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
        <Image
          style={styles.tinyProductImage}
          source={{ uri: props.imageUrl }}
        />
        <Item>
          <Input
            disabled={true}
            value={props.quantity.toString()}
            style={styles.quantityInput}
          />
        </Item>

        <View style={{ flexDirection: "row" }}>
          <Button
            small
            danger
            style={styles.button}
            onPress={() => props.onRemove(props.id)}
          >
            <FontAwesome5 name="minus" color="white" />
          </Button>
          <Button
            small
            info
            style={styles.button}
            onPress={() => props.onAdd(props.id)}
          >
            <FontAwesome5 name="plus" color="white" />
          </Button>
        </View>
      </View>
    </ListItem>
  );
}
