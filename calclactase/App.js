import React, { useState } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import { StyleSheet } from 'react-native';
import NavBar from './components/NavBar';

export default function App() {
  const [campo, setCampo] = useState('');
  const [altera, setAltera] = useState('');


  return (
    <Container>
      <NavBar cartItemCount={0}/>
      <Content />
      <Footer>
        <FooterTab>
          <Button active>
            <Icon active name="home" />
          </Button>
          <Button>
            <Icon name="calculator" />
          </Button>
          <Button>
            <Icon name="settings" />
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
