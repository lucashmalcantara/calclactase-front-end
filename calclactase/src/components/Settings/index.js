import React, { useState } from "react";
import { StyleSheet, Linking, Keyboard } from "react-native";
import {
  H1,
  Form,
  Item,
  Picker,
  Label,
  Input,
  Icon,
  Card,
  CardItem,
  Text,
  Left,
  Right,
  Button,
  Toast,
} from "native-base";
import styles from "./styles";
import appTexts from "../../shared/AppTexts";
import appSettings from "../../shared/AppSettings";

export default function Settings(props) {
  console.log(">>> Settings(props)");
  console.log("props.userSettings:", props.userSettings);
  console.log(
    "props.userSettings.medicineTypeId:",
    props.userSettings.medicineTypeId
  );
  console.log(
    "props.userSettings.medicineFcc:",
    props.userSettings.medicineFcc
  );

  getInitialMedicineType = () =>
    props.userSettings
      ? props.userSettings.medicineTypeId
      : props.medicineTypes[0].id;

  getInitialMedicineFcc = () =>
    props.userSettings
      ? props.userSettings.medicineFcc.toString()
      : props.medicineTypes[0].medicineFcc.toString();

  const [medicineTypeId, setMedicineTypeId] = useState(
    getInitialMedicineType()
  );

  const [medicineFcc, setMedicineFcc] = useState(getInitialMedicineFcc());

  onMedicineTypeChange = (medicineTypeId) => {
    console.log("ID do tipo de medicamento selecionado: ", medicineTypeId);
    setMedicineTypeId(medicineTypeId);
  };

  onMedicineFccChange = (medicineFccText) => {
    console.log("FCC digitado: ", medicineFccText);
    setMedicineFcc(medicineFccText.replace(/[^0-9]/g, ""));
  };

  onSave = () => {
    Keyboard.dismiss();

    if (medicineFcc === "") {
      Toast.show({
        text: "Digite um valor para a Medida em FCC",
        position: appSettings.defaultToastPosition,
        type: "danger",
        buttonText: appTexts.ok,
      });
      return;
    }

    props.onSave({
      medicineTypeId: medicineTypeId,
      medicineFcc: Number.parseFloat(medicineFcc),
    });
  };

  setDefaultMedicineFcc = () => {
    console.log(">>> setDefaultMedicineFcc");
    const selectedMedicineType = getSelectedMedicineType();
    setMedicineFcc(selectedMedicineType.exampleFccValue);
  };

  getSelectedMedicineType = () =>
    props.medicineTypes.find((m) => m.id === medicineTypeId);

  return (
    <React.Fragment>
      <H1 style={styles.largeTitle}>Configurações</H1>
      <Form>
        <Item picker>
          <Picker
            mode="dropdown"
            iosIcon={<Icon name="arrow-down" />}
            style={{ width: undefined }}
            placeholder="Selecione o tipo de medicamento"
            placeholderStyle={{ color: "#bfc6ea" }}
            placeholderIconColor="#007aff"
            selectedValue={medicineTypeId}
            onValueChange={onMedicineTypeChange.bind(this)}
          >
            {props.medicineTypes.map((m) => (
              <Picker.Item label={m.name} value={m.id} key={m.id} />
            ))}
          </Picker>
        </Item>
        <Item floatingLabel>
          <Label>Medida em FCC</Label>
          <Input
            keyboardType="numeric"
            onChangeText={(inputText) => onMedicineFccChange(inputText)}
            onSubmitEditing={onSave}
            value={medicineFcc}
          />
        </Item>
        <Item style={styles.saveSettingsButtonContainer}>
          <Button onPress={onSave}>
            <Text>SALVAR</Text>
          </Button>
        </Item>
      </Form>

      <Card style={styles.baseDoubleMarginTop}>
        <CardItem header bordered>
          <Text>Exemplos de medicamentos</Text>
        </CardItem>
        <CardItem
          button
          onPress={() => Linking.openURL("http://lacday.com.br/")}
        >
          <Left>
            <Text>Lacday: comprimidos de 10.000 FCC</Text>
          </Left>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </CardItem>
        <CardItem
          button
          onPress={() =>
            Linking.openURL("https://consultaremedios.com.br/laclev/bula")
          }
        >
          <Left>
            <Text>LacLev: comprimidos de 9.000 FCC</Text>
          </Left>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </CardItem>
        <CardItem
          button
          onPress={() => Linking.openURL("https://www.apsen.com.br/lactosil/")}
        >
          <Left>
            <Text>Lactosil: comprimidos de 10.000 FCC</Text>
          </Left>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </CardItem>
        <CardItem
          button
          onPress={() =>
            Linking.openURL(
              "https://www.cliquefarma.com.br/preco/deslac-lactase-gotas-15ml/bula#descricao-do-produto"
            )
          }
        >
          <Left>
            <Text>Deslac Lactase: gotas de 500 FCC</Text>
          </Left>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </CardItem>
      </Card>
    </React.Fragment>
  );
}
