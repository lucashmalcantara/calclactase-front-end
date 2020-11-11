import React, { useState, useEffect } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Toast, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import NavBar from './src/components/NavBar';
import Products from './src/components/Products';
import ProductRepository from './src/repositories/ProductRepository';
import Calculator from './src/components/Calculator'

export default function App() {
  const [campo, setCampo] = useState('');
  const [altera, setAltera] = useState('');

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function recuperaDados() {
      try {
        // const t = await AsyncStorage.getItem('tarefas');
        // if (t !== null) setTarefas(JSON.parse(t));
      } catch (error) {
        Alert.alert('As tarefas não foram carregadas');
      }
    }

    recuperaDados();
    setProducts(ProductRepository.getAll());
  }, []);

  const addToCart = (t) => {
    Toast.show({
      text: 'Produto adicionado a sacola!',
      position: 'bottom',
    });
  };

  const removeFromCart = (id, d) => {
    Toast.show({
      text: 'Produto excluido da sacola!',
      position: 'bottom',
    });
  };

  return (
    <Container>
      <NavBar cartItemCount={0} />
      <Content>
        <Products productList={products}/>
        {/* <Calculator calculatorItemList={products}/> */}
      </Content>
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
