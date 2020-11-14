import React from 'react';

import { Container, Header, Title, Button, Left, Right, Body, Icon, Text, Badge, Thumbnail } from 'native-base';
import { Image } from 'react-native';
import Logo from '../../assets/images/logo-calclactase.png';
import styles from './styles';

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