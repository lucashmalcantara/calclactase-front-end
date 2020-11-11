import React from 'react';
import { StyleSheet } from 'react-native';
import { H1, List } from 'native-base';
import CalculatorItem from './CalculatorItem'

export default function Calculator(props) {
    return (
        <React.Fragment>
            <H1 style={estilos.listTitle}>Itens da calculadora</H1>
            <List>
                {props.calculatorItemList.map((item) => (
                    <CalculatorItem />
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