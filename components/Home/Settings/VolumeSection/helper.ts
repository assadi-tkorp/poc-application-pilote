export const calculateVolume = (value: number): number => {
  if (!value) return 0;
  return Number((value * 0.1).toFixed(0));
};
export const parseNumber = (value: number): number => {
  if (!value) return 0;
  return Number(value.toFixed(0));
};
