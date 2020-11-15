import { AsyncStorage } from 'react-native';

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

const settingsStorageTag = "calcLactaseSettings";

export default class SettingsBusiness {
  static getAllMedicineTypes() {
    return medicineTypes;
  }

  static getMedicineTypeById(id) {
    return medicineTypes.find((m) => m.id === id);
  }

  
  static saveAsync = async (settings) => {
    await AsyncStorage.setItem(settingsStorageTag, JSON.stringify(settings));
  }

  static getAsync = async () => 
     await AsyncStorage.getItem(settingsStorageTag);

}
