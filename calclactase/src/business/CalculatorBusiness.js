import ProductBusiness from "./ProductBusiness";

let items = [];

export default class CalculatorBusiness {
  static getAll() {
    return items;
  }

  static GetItemCount = () => {
    return items.length;
  };

  static Add = (productId) => {
    const itemIndex = this.findIndexByProductId(productId);
    console.log("Quantidade de itens: ", items.length);

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

    // items = [...items, item]
    items.push(item);
  };

  static addQuantity = (id) => {
    const item = this.findById(id);
    item.quantity += 1;
  };

  static removeQuantity = (id) => {
    const item = this.findById(id);
    if (item.quantity === 0) {
      return;
    }

    item.quantity -= 1;
  };

  static findById = (id) => items.find((i) => i.id === id);

  static findIndexById = (id) => items.findIndex((i) => i.id === id);

  static findIndexByProductId = (productId) =>
    items.findIndex((i) => i.product.id === productId);
}
