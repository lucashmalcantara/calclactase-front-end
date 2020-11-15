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
import SettingsBusiness from "./src/business/SettingsBusiness";
import appSettings from "./src/shared/AppSettings";

export default function App() {
  const homeTag = "home";
  const calculatorTag = "calculator";
  const settingsTag = "settings";
  const medicineType = SettingsBusiness.getMedicineTypeExample();

  const [isLoadingComplete, setLoadingComplete] = useState(false);

  const [selectedScreen, setSelectedScreen] = useState(homeTag);

  const [products, setProducts] = useState([]);
  const [calculatorResult, setCalculatorResult] = useState();

  const [userSettings, setUserSettings] = useState();

  useEffect(() => {
    async function initialize() {
      console.log("Recuperando fontes....");
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      });
      console.log("Fontes recuperadas....");

      console.log("Carregando configurações do usuário...");
      setUserSettings(await SettingsBusiness.getAsync());
      console.log("Configurações do usuário carregadas com sucesso...");

      setLoadingComplete(true);
    }

    initialize();
    setProducts(ProductBusiness.getAll());
    console.log("Obtendo resultado parcial...");
    setCalculatorResult(CalculatorBusiness.getResult(undefined, undefined));
    console.log("Resultado parcial obtido...");
  }, []);

  const addToCalculator = (productId) => {
    console.log(">>> BEGIN addToCalculator");
    const product = ProductBusiness.getById(productId);
    Toast.show({
      text: `${product.name} adicionado a calculadora.`,
      position: appSettings.defaultToastPosition,
    });

    CalculatorBusiness.Add(productId);
    setCalculatorResult(
      CalculatorBusiness.getResult(
        userSettings.medicineTypeId,
        userSettings.medicineFcc
      )
    );
    console.log(">>> END addToCalculator");
  };

  const addQuantity = (calculatorItemId) => {
    CalculatorBusiness.addQuantity(calculatorItemId);
    setCalculatorResult(
      CalculatorBusiness.getResult(
        userSettings.medicineTypeId,
        userSettings.medicineFcc
      )
    );
  };

  const removeQuantity = (calculatorItemId) => {
    CalculatorBusiness.removeQuantity(calculatorItemId);
    setCalculatorResult(
      CalculatorBusiness.getResult(
        userSettings.medicineTypeId,
        userSettings.medicineFcc
      )
    );
  };

  const saveUserSettings = async (userSettings) => {
    console.log(">>> saveUserSettings");
    console.log(userSettings);
    await SettingsBusiness.saveAsync(userSettings);
    setUserSettings(userSettings);
    Toast.show({
      text: `As configurações foram salvas com sucesso.`,
      position: appSettings.defaultToastPosition,
    });
  };

  return (
    <Root>
      {!isLoadingComplete ? (
        <Container>
          <Spinner />
        </Container>
      ) : (
        <Container>
          <NavBar itemCount={0} />
          <Content padder>
            {selectedScreen === homeTag && (
              <Products productList={products} onAdd={addToCalculator} />
            )}
            {selectedScreen === calculatorTag && (
              <Calculator
                onAdd={addQuantity}
                onRemove={removeQuantity}
                result={calculatorResult}
              />
            )}
            {selectedScreen === settingsTag && (
              <Settings
                userSettings={userSettings}
                medicineTypes={SettingsBusiness.getAllMedicineTypes()}
                onSave={saveUserSettings}
              />
            )}
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
