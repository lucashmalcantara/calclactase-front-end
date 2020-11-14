// Lista de produtos lácteos e suas características.
const products = [
  {
    id: "1",
    name: "Leite de vaca integral",
    displayUnit: "ml",
    displayUnitValue: 100,
    grams: 104,
    percentageOfLactose: 0.046,
    imageUrl: require("../assets/images/products/milk.jpg"),
    references: [
      {
        name: "Valores Lactase",
        url: "http://dx.doi.org/10.1590/S0104-42302010000200025",
      },
      {
        name: "Peso Leite",
        url: "https://conversor-de-medidas.com/",
      },
    ],
  },
  {
    id: "2",
    name: "Leite em pó desnatado",
    displayUnit: "g",
    displayUnitValue: 100,
    grams: 100,
    percentageOfLactose: 0.529,
    imageUrl: require("../assets/images/products/powdered-milk.jpeg"),
    references: [
      {
        name: "Valores Lactase",
        url: "http://dx.doi.org/10.1590/S0104-42302010000200025",
      },
    ],
  },
  {
    id: "3",
    name: "Sorvete de chocolate",
    displayUnit: "bola",
    displayUnitValue: 1,
    grams: 100,
    percentageOfLactose: 0.047,
    imageUrl: require("../assets/images/products/chocolate-ice-cream.jpg"),
    references: [
      {
        name: "Valores Lactase",
        url: "http://dx.doi.org/10.1590/S0104-42302010000200025",
      },
    ],
  },
  {
    id: "4",
    name: "Queijo muçarela",
    displayUnit: "g",
    displayUnitValue: 100,
    grams: 100,
    percentageOfLactose: 0.03,
    imageUrl: require("../assets/images/products/mozzarella.jpg"),
    references: [
      {
        name: "Valores Lactase",
        url: "https://foodintolerances.org/lactose-content-of-food",
      },
    ],
  },
  {
    id: "5",
    name: "Milk Shake",
    displayUnit: "ml",
    displayUnitValue: 500,
    grams: 408,
    percentageOfLactose: 0.045,
    imageUrl: require("../assets/images/products/milkshake.jpg"),
    references: [
      {
        name: "Valores Lactase",
        url: "http://dx.doi.org/10.1590/S0104-42302010000200025",
      },
      {
        name: "Peso Milk Shake",
        url: "https://www.bobs.com.br/bobs/tabela-nutricional.pdf",
      },
    ],
  },
  {
    id: "6",
    name: "Leite condensado integral",
    displayUnit: "g",
    displayUnitValue: 100,
    grams: 100,
    percentageOfLactose: 0.147,
    imageUrl: require("../assets/images/products/condensed-milk.jpg"),
    references: [
      {
        name: "Valores Lactase",
        url:
          "https://www.tuasaude.com/saiba-qual-e-a-quantidade-de-lactose-nos-alimentos/",
      },
    ],
  },
];

export default class ProductRepository {
  static getAll() {
    return products;
  }

  static getById(id) {
    console.log("Produto: ", products.find((p) => p.id === id));
    return products.find((p) => p.id === id);
  }
}
