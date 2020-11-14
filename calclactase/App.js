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
  Spinner,
} from "native-base";
import { StyleSheet } from "react-native";
import NavBar from "./src/components/NavBar";
import Products from "./src/components/Products";
import ProductBusiness from "./src/business/ProductBusiness";
import CalculatorBusiness from "./src/business/CalculatorBusiness";
import Calculator from "./src/components/Calculator";
import Settings from "./src/components/Settings";
import { general } from "./src/styles";
import CalculatorItem from "./src/components/CalculatorItem";
import * as Font from "expo-font";

export default function App() {
  const homeTag = "home";
  const calculatorTag = "calculator";
  const settingsTag = "settings";

  const [isLoadingComplete, setLoadingComplete] = useState(false);

  const [selectedScreen, setSelectedScreen] = useState(homeTag);

  const [products, setProducts] = useState([]);
  const [calculatorItems, setCalculatorItems] = useState([]);

  useEffect(() => {
    async function loadResources() {
      console.log("Recuperando fontes....");
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      });
      console.log("Fontes recuperadas....");
      setLoadingComplete(true);
    }

    loadResources();
  }, []);

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
    setProducts(ProductBusiness.getAll());
  }, []);

  const addToCalculator = (productId) => {
    Toast.show({
      text: "Produto adicionado a calculadora! ID: " + productId,
      position: "bottom",
      duration: 2500,
    });

    CalculatorBusiness.Add(productId);
    setCalculatorItems([...CalculatorBusiness.getAll()]);
  };

  const addQuantity = (calculatorItemId) => {
    CalculatorBusiness.addQuantity(calculatorItemId);
    setCalculatorItems([...CalculatorBusiness.getAll()]);
  };

  const removeQuantity = (calculatorItemId) => {
    CalculatorBusiness.removeQuantity(calculatorItemId);
    setCalculatorItems([...CalculatorBusiness.getAll()]);
  };

  return (
    <Root>
      {!isLoadingComplete ? (
        <Container>
          <Spinner />
        </Container>
      ) : (
        <Container>
          <NavBar itemCount={calculatorItems.length} />
          <Content padder>
            {selectedScreen === homeTag && (
              <Products productList={products} onAdd={addToCalculator} />
            )}
            {selectedScreen === calculatorTag && (
              <Calculator
                onAdd={addQuantity}
                onRemove={removeQuantity}
                items={calculatorItems}
              />
            )}
            {selectedScreen === settingsTag && <Settings />}
          </Content>
          <Footer>
            <FooterTab>
              <Button
                active={selectedScreen === homeTag}
                onPress={() => setSelectedScreen(homeTag)}
              >
                <Icon
                  active={selectedScreen === homeTag}
                  type="FontAwesome"
                  name="home"
                />
              </Button>
              <Button
                active={selectedScreen === calculatorTag}
                onPress={() => setSelectedScreen(calculatorTag)}
              >
                <Icon
                  active={selectedScreen === calculatorTag}
                  type="FontAwesome"
                  name="calculator"
                />
              </Button>
              <Button
                active={selectedScreen === settingsTag}
                onPress={() => setSelectedScreen(settingsTag)}
              >
                <Icon
                  active={selectedScreen === settingsTag}
                  type="FontAwesome"
                  name="cog"
                />
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      )}
    </Root>
  );
}

const styles = StyleSheet.create({
  ...general,
});
