import ProductRepository from "./ProductRepository";

const items = [
  { id: "1", product: ProductRepository.getById("1"), quantity: 1 },
  { id: "2", product: ProductRepository.getById("2"), quantity: 2 },
  { id: "3", product: ProductRepository.getById("3"), quantity: 3 },
];

export default class CalculatorItemRepository {
  static getAll() {
    return items;
  }
}
