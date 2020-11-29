// Lista de produtos lácteos e suas características.
const defaultProducts = [
  {
    id: "5fc2b69b-1bc6-4adc-ac73-1069a6a247b5",
    name: "Leite de vaca integral",
    displayUnit: "ml",
    displayUnitValue: 100,
    grams: 104,
    percentageOfLactose: 0.046,
    imageUrl: "https://i.imgur.com/ppjdtMv.jpg",
    references: [
      {
        id: "873a4d39-aea7-4424-bacf-48df29f1d67a",
        name: "Valores Lactase",
        url: "http://dx.doi.org/10.1590/S0104-42302010000200025",
      },
      {
        id: "4c1e28e5-5ff3-46a1-9df4-e9da1b0665e5",
        name: "Peso Leite",
        url: "https://conversor-de-medidas.com/",
      },
    ],
  },
  {
    id: "c21eacb9-d5ca-4bad-ac89-5d1c4990fe6a",
    name: "Leite em pó desnatado",
    displayUnit: "g",
    displayUnitValue: 100,
    grams: 100,
    percentageOfLactose: 0.529,
    imageUrl: "https://i.imgur.com/HuzIBlA.jpg",
    references: [
      {
        id: "77d1409c-08f7-46b8-9c1d-58ce5f9f738a",
        name: "Valores Lactase",
        url: "http://dx.doi.org/10.1590/S0104-42302010000200025",
      },
    ],
  },
  {
    id: "4f9efea9-941c-4b4c-9686-93ceb29f8309",
    name: "Sorvete de chocolate",
    displayUnit: "bola",
    displayUnitValue: 1,
    grams: 100,
    percentageOfLactose: 0.047,
    imageUrl: "https://i.imgur.com/otlTcma.jpg",
    references: [
      {
        id: "c1d37aee-5682-4dba-ac04-9a5dfb05aa0c",
        name: "Valores Lactase",
        url: "http://dx.doi.org/10.1590/S0104-42302010000200025",
      },
    ],
  },
  {
    id: "f032039c-c326-483f-a310-9dc7bb1accef",
    name: "Queijo muçarela",
    displayUnit: "g",
    displayUnitValue: 100,
    grams: 100,
    percentageOfLactose: 0.03,
    imageUrl: "https://i.imgur.com/jEXzhxS.jpg",
    references: [
      {
        id: "efe9dde4-2b47-4ab6-a16e-d281ba91332d",
        name: "Valores Lactase",
        url: "https://foodintolerances.org/lactose-content-of-food",
      },
    ],
  },
  {
    id: "54d5d8ff-54ca-4bd4-a056-fe4e8093fefe",
    name: "Milk Shake",
    displayUnit: "ml",
    displayUnitValue: 500,
    grams: 408,
    percentageOfLactose: 0.045,
    imageUrl: "https://i.imgur.com/V974O8m.jpg",
    references: [
      {
        id: "cce76798-fe22-408d-95ef-0f7b33f74ebf",
        name: "Valores Lactase",
        url: "http://dx.doi.org/10.1590/S0104-42302010000200025",
      },
      {
        id: "09bb9587-442d-46d0-bd22-5c5d5a83c38b",
        name: "Peso Milk Shake",
        url: "https://www.bobs.com.br/bobs/tabela-nutricional.pdf",
      },
    ],
  },
  {
    id: "0eca7118-633d-4def-b6cf-de727415bf42",
    name: "Leite  condensado integral",
    displayUnit: "g",
    displayUnitValue: 100,
    grams: 100,
    percentageOfLactose: 0.147,
    imageUrl: "https://i.imgur.com/WXvILqM.jpg",
    references: [
      {
        id: "368316d4-26be-4af1-8d0e-7478ff28d3cc",
        name: "Valores Lactase",
        url:
          "https://www.tuasaude.com/saiba-qual-e-a-quantidade-de-lactose-nos-alimentos/",
      },
    ],
  },
];

import { AsyncStorage } from "react-native";

const productsEndPoint = "https://calclactase.azurewebsites.net/product";
const settingsStorageKey = "calcLactaseProducts";

export default class ProductBusiness {

  static getAllAsync = async () => {
    try {
      const response = await fetch(productsEndPoint);
      const products = await response.json();
      await this.storeInCacheAsync(products);
      return products;
    } catch (error) {
      console.error(error);
    }
  };

  static getByIdAsync = async (id) => {
    console.log(">> BEGIN: getByIdAsync");
    const products = await this.getFromCacheAsync();
    return products.find((p) => p.id === id);
  };

  static storeInCacheAsync = async (products) => {
    await AsyncStorage.setItem(settingsStorageKey, JSON.stringify(products));
  };

  static getFromCacheAsync = async () => {
    const products = await AsyncStorage.getItem(settingsStorageKey);

    if (products != null) {
      return JSON.parse(products);
    }

    return [];
  };
}
