import React, { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { ListItem, Button, Icon, Text, Input } from 'native-base';
import Logo from '../assets/images/logo-calclactase.png';

export default function Product(props) {
    return (
        <ListItem style={{ alignItems: 'flex-start' }}>
            <Text>Item Calculadora</Text>
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