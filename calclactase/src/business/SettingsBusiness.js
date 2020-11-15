import { AsyncStorage } from "react-native";

const medicineTypes = [
  {
    id: "1",
    name: "Comprimido",
    pluralName: "Comprimidos",
    exampleFccValue: 10000,
  },
  {
    id: "2",
    name: "Gota",
    pluralName: "Gotas",
    exampleFccValue: 500,
  },
];

const settingsStorageKey = "calcLactaseSettings";

export default class SettingsBusiness {
  static getMedicineTypeExample() {
    return medicineTypes[0];
  }

  static getAllMedicineTypes() {
    return medicineTypes;
  }

  static getMedicineTypeById(id) {
    return medicineTypes.find((m) => m.id === id);
  }

  static saveAsync = async (settings) => {
    await AsyncStorage.setItem(settingsStorageKey, JSON.stringify(settings));
  };

  static getAsync = async () => {
    const userSettings = await AsyncStorage.getItem(settingsStorageKey);

    if (userSettings != null) {
      return JSON.parse(userSettings);
    }

    return defaultSetting;
  };

  static defaultSetting = () => {
    const medicineType = SettingsBusiness.getMedicineTypeExample();

    return {
      medicineTypeId: medicineType.id,
      medicineFcc: medicineType.exampleFccValue,
    };
  };
}
