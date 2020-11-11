import React from 'react';

import { StyleSheet } from 'react-native';
import { Container, Header, Title, Button, Left, Right, Body, Icon, Text, Badge, Thumbnail } from 'native-base';
import { Image } from 'react-native';
import Logo from '../assets/images/logo-calclactase.png';

export default function NavBar({ cartItemCount }) {
    return (
        <Header>
            <Left style={styles.leftArea}>
                <Image source={Logo} style={styles.logo} />
                <Title>CalcLactase</Title>
            </Left>
            <Right >
                <Badge info >
                    <Text>{cartItemCount}</Text>
                </Badge>
            </Right>
        </Header>
    );
}

const styles = StyleSheet.create({
    leftArea: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    logo: {
        flex: 1,
        height: 40,
        resizeMode: 'contain',
    }
});