import React, { useState, useEffect } from "react";
import {
  Root,
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Toast,
  Spinner,
} from "native-base";
import { StyleSheet } from "react-native";
import NavBar from "./src/components/NavBar";
import Products from "./src/components/Products";
import ProductBusiness from "./src/business/ProductBusiness";
import CalculatorBusiness from "./src/business/CalculatorBusiness";
import Calculator from "./src/components/Calculator";
import Settings from "./src/components/Settings";
import { colors, general, metrics } from "./src/styles";
import * as Font from "expo-font";
import SettingsBusiness from "./src/business/SettingsBusiness";
import appSettings from "./src/shared/AppSettings";
import { FontAwesome5 } from "@expo/vector-icons";

export default function App() {
  const homeTag = "home";
  const calculatorTag = "calculator";
  const settingsTag = "settings";
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

      setProducts(await ProductBusiness.getAllAsync());

      console.log("Carregando configurações do usuário...");
      setUserSettings(await SettingsBusiness.getAsync());
      console.log("Configurações do usuário carregadas com sucesso...");

      console.log("Obtendo resultado parcial...");
      setCalculatorResult(
        await CalculatorBusiness.getResultAsync(undefined, undefined)
      );
      console.log("Resultado parcial obtido...");

      setLoadingComplete(true);
    }

    initialize();
  }, []);

  const addToCalculatorAsync = async (productId) => {
    console.log(">>> BEGIN addToCalculator");
    const product = await ProductBusiness.getByIdAsync(productId);
    Toast.show({
      text: `${product.name} adicionado a calculadora.`,
      position: appSettings.defaultToastPosition,
    });

    CalculatorBusiness.Add(productId);
    setCalculatorResult(
      await CalculatorBusiness.getResultAsync(
        userSettings.medicineTypeId,
        userSettings.medicineFcc
      )
    );
    console.log(">>> END addToCalculator");
  };

  const addQuantityAsync = async (calculatorItemId) => {
    CalculatorBusiness.addQuantity(calculatorItemId);
    setCalculatorResult(
      await CalculatorBusiness.getResultAsync(
        userSettings.medicineTypeId,
        userSettings.medicineFcc
      )
    );
  };

  const removeQuantityAsync = async (calculatorItemId) => {
    CalculatorBusiness.removeQuantity(calculatorItemId);
    setCalculatorResult(
      await CalculatorBusiness.getResultAsync(
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
    setCalculatorResult(
      await CalculatorBusiness.getResultAsync(
        userSettings.medicineTypeId,
        userSettings.medicineFcc
      )
    );
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
          <NavBar itemCount={calculatorResult.resultItems.length} />
          <Content padder>
            {selectedScreen === homeTag && (
              <Products productList={products} onAdd={addToCalculatorAsync} />
            )}
            {selectedScreen === calculatorTag && (
              <Calculator
                onAdd={addQuantityAsync}
                onRemove={removeQuantityAsync}
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
                <FontAwesome5
                  name="home"
                  size={metrics.bottomNavBarIconHeight}
                  color={selectedScreen === homeTag ? "white" : colors.softGray}
                />
              </Button>
              <Button
                active={selectedScreen === calculatorTag}
                onPress={() => setSelectedScreen(calculatorTag)}
              >
                <FontAwesome5
                  name="calculator"
                  size={metrics.bottomNavBarIconHeight}
                  color={selectedScreen === calculatorTag ? "white" : colors.softGray}
                />
              </Button>
              <Button
                active={selectedScreen === settingsTag}
                onPress={() => setSelectedScreen(settingsTag)}
              >
                <FontAwesome5
                  name="cog"
                  size={metrics.bottomNavBarIconHeight}
                  color={selectedScreen === settingsTag ? "white" : colors.softGray}
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
