import ProductBusiness from "./ProductBusiness";
import SettingsBusiness from "./SettingsBusiness";

let items = [];

const FccAmountToHydrolyzeAGramOfLactose = 300;

export default class CalculatorBusiness {
  static getResultAsync = async (medicineTypeId, medicineFcc) => {
    console.log(">>> BEGIN getResultAsync");
    const result = {
      resultItems: [],
      lactaseSum: 0,
      necessaryFcc: 0,
      necessaryMedicineAmount: 0,
      medicineDisplayName: "",
    };

    if (items.length === 0 || !medicineTypeId || !medicineFcc) return result;

    result.resultItems = await this.getResultItemsAsync();
    result.lactaseSum = this.getLactoseSum(result.resultItems);
    result.necessaryFcc = this.getNecessaryFcc(result.lactaseSum);
    result.necessaryMedicineAmount = this.calcNecessaryMedicineAmount(
      result.necessaryFcc,
      medicineFcc
    );
    result.medicineDisplayName = this.getMedicineDisplayName(
      medicineTypeId,
      result.necessaryMedicineAmount
    );
    console.log(">>> END getResultAsync");
    return result;
  };

  static getMedicineDisplayName = (medicineTypeId, necessaryMedicineAmount) => {
    const medicineType = SettingsBusiness.getMedicineTypeById(medicineTypeId);

    return necessaryMedicineAmount > 1
      ? medicineType.pluralName
      : medicineType.name;
  };

  //#region Lactose Calcs
  static calcNecessaryMedicineAmount = (necessaryFcc, medicineFcc) => {
    let necessaryMedicineAmount = necessaryFcc / medicineFcc;

    let integerPartOfNecessaryMedicineAmount = Math.trunc(
      necessaryMedicineAmount
    );

    let decimalPartOfNecessaryMedicineAmount = Number(
      (necessaryMedicineAmount - integerPartOfNecessaryMedicineAmount).toFixed(
        4
      )
    );

    let finalNecessaryMedicineAmount =
      decimalPartOfNecessaryMedicineAmount < 0.5
        ? integerPartOfNecessaryMedicineAmount
        : integerPartOfNecessaryMedicineAmount + 0.5;

    if (finalNecessaryMedicineAmount < 0.5) finalNecessaryMedicineAmount = 0.5;

    console.log("necessaryMedicineAmount: ", necessaryMedicineAmount);
    console.log(
      "decimalPartOfNecessaryMedicineAmount: ",
      decimalPartOfNecessaryMedicineAmount
    );

    return finalNecessaryMedicineAmount;
  };

  static getLactoseSum = (resultItems) =>
    resultItems.reduce((sum, item) => sum + item.lactoseValue, 0);

  static getNecessaryFcc = (gramsOfLactose) =>
    gramsOfLactose * FccAmountToHydrolyzeAGramOfLactose;

  static getResultItemsAsync = async () => {
    console.log(">>> getResultItems");

    const resultItems = [];

    for (var i = 0; i < items.length; i++) {
      const product = await ProductBusiness.getByIdAsync(items[i].productId);

      const resultItem = {
        itemId: items[i].id,
        productId: product.id,
        productName: product.name,
        finalUnitValue: product.displayUnitValue * items[i].quantity,
        displayUnit: product.displayUnit,
        imageUrl: product.imageUrl,
        quantity: items[i].quantity,
        lactoseValue: this.calcLactoseValue(
          items[i].quantity,
          product.grams,
          product.percentageOfLactose
        ),
      };

      resultItems.push(resultItem);
    }

    return resultItems;
  };

  static calcLactoseValue = (quantity, weight, lactosePercentage) =>
    quantity * weight * lactosePercentage;
  //#endregion

  static getAllItems() {
    return items;
  }

  static GetItemCount = () => {
    return items.length;
  };

  static Add = (productId) => {
    console.log(">>> BEGIN CalculatorBusiness.Add");
    const itemIndex = this.findIndexByProductId(productId);
    console.log("Quantidade de itens: ", items.length);

    if (itemIndex >= 0) {
      items[itemIndex].quantity += 1;
      console.log("Quantidade adicionada: ", items[itemIndex].quantity);
      return;
    }

    let item = {
      id: Math.random().toString(),
      productId: productId,
      quantity: 1,
    };

    items.push(item);
    console.log(">>> END CalculatorBusiness.Add");
  };

  static addQuantity = (id) => {
    const item = this.findById(id);
    item.quantity += 1;
  };

  static removeQuantity = (id) => {
    const item = this.findById(id);
    item.quantity -= 1;

    if (item.quantity === 0) this.deleteById(id);
  };

  static findById = (id) => items.find((i) => i.id === id);

  static findIndexById = (id) => items.findIndex((i) => i.id === id);

  static findIndexByProductId = (productId) =>
    items.findIndex((i) => i.productId === productId);

  static deleteById = (id) => {
    items = items.filter((i) => i.id !== id);
  };
}
