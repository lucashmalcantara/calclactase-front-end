import ProductBusiness from "./ProductBusiness";

const items = [];

export default class CalculatorBusiness {
  static getAll() {
    return items;
  }

  static Add = (productId) => {
    console.log("Adicionando produto a calculadora: ", productId);
    const itemIndex = this.findIndexByItemId(productId);

    if (itemIndex >= 0) {
      items[itemIndex].quantity += 1;
      console.log("Quantidade adicionada: ", items[itemIndex].quantity);
      return;
    }

    let item = {
      id: Math.random().toString(),
      product: ProductBusiness.getById(productId),
      quantity: 1,
    };

    items.push(item);
  };

  static findIndexByItemId = (productId) => {
    items.findIndex((i) => i.product.id === productId);
  };
}
