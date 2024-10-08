import {
  getFreeDiskStorageAsync,
  getTotalDiskCapacityAsync,
} from "expo-file-system";

const mesure = {
  ko: 1000,
  Mo: 100000,
  Go: 1000000000,
};

export const infoStorage = async () => {
  const total = await getTotalDiskCapacityAsync();
  const info = await getFreeDiskStorageAsync();

  const freeSpace = formatMemoryUnit(info);
  const totalSpace = formatMemoryUnit(total);

  console.log(
    "Free local space " + freeSpace.value.toFixed(2) + " " + freeSpace.mesure
  );
  console.log(
    "Total: " + totalSpace.value.toFixed(2) + " " + totalSpace.mesure
  );
};

type formatMemoryUnitArgs = { mesure: string; value: number };
const formatMemoryUnit = (number: number): formatMemoryUnitArgs => {
  try {
    if (number < mesure.Mo) {
      return {
        mesure: getKeyByValue(mesure, mesure.ko),
        value: value_operation(number, mesure.ko),
      };
    } else if (number < mesure.Go) {
      return {
        mesure: getKeyByValue(mesure, mesure.Mo),
        value: value_operation(number, mesure.Mo),
      };
    }

    return {
      mesure: getKeyByValue(mesure, mesure.Go),
      value: value_operation(number, mesure.Go),
    };
  } catch (error) {
    return {
      mesure: "Unité introuvable",
      value: 0,
    };
  }
};

function getKeyByValue(object: object, value: any) {
  const key = Object.keys(object).find((key) => object[key] === value);
  return key || "not found key";
}

const value_operation = (a: number, b: number): number => {
  if (b === 0) {
    return 0;
  }
  return Number(a / b);
};
