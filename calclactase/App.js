import React, { useState, useEffect } from "react";
import {
  Root,
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Toast,
  Text,
} from "native-base";
import { StyleSheet } from "react-native";
import NavBar from "./src/components/NavBar";
import Products from "./src/components/Products";
import ProductRepository from "./src/repositories/ProductRepository";
import Calculator from "./src/components/Calculator";
import Settings from "./src/components/Settings";
import { general } from "./src/styles";
import CalculatorItem from "./src/components/CalculatorItem";

export default function App() {
  const homeTag = "home";
  const calculatorTag = "calculator";
  const settingsTag = "settings";

  const [selectedScreen, setSelectedScreen] = useState(homeTag);

  const [campo, setCampo] = useState("");
  const [altera, setAltera] = useState("");

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function recuperaDados() {
      try {
        // const t = await AsyncStorage.getItem('tarefas');
        // if (t !== null) setTarefas(JSON.parse(t));
      } catch (error) {
        Alert.alert("As tarefas não foram carregadas");
      }
    }

    recuperaDados();
    setProducts(ProductRepository.getAll());
  }, []);

  const addToCart = () => {
    console.log("foi...");
  };

  const removeFromCart = (id, d) => {
    styles.container;
    Toast.show({
      text: "Produto excluido da sacola!",
      position: "bottom",
    });
  };

  return (
    <Root>
      <Container>
        <NavBar cartItemCount={0} />
        <Content padder>
          {selectedScreen === homeTag && <Products productList={products} />}
          {selectedScreen === calculatorTag && (
            <Calculator calculatorItemList={products} />
          )}
          {selectedScreen === settingsTag && <Settings />}
        </Content>
        <Footer>
          <FooterTab>
            <Button
              active={selectedScreen === homeTag}
              onPress={() => setSelectedScreen(homeTag)}
            >
              <Icon active name="home" />
            </Button>
            <Button
              active={selectedScreen === calculatorTag}
              onPress={() => setSelectedScreen(calculatorTag)}
            >
              <Icon name="calculator" />
            </Button>
            <Button
              active={selectedScreen === settingsTag}
              onPress={() => setSelectedScreen(settingsTag)}
            >
              <Icon name="settings" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    </Root>
  );
}

const styles = StyleSheet.create({
  ...general,
});
