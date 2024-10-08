export const calculateVolume = (value: number): number => {
  if (!value) return 0;
  return Number((value * 0.1).toFixed(0));
};
export const parseNumber = (value: number): number => {
  if (!value) return 0;
  return Number(value.toFixed(0));
};

/**
 *
 * @param sliderValue valeur reçus par le slider
 * @returns {number} valeur en base 15
 */
export const convertVolumeBase15 = (sliderValue: number) => {
  if (!sliderValue || sliderValue < 0) return 0;
  const result = sliderValue * 0.15;
  if (result > 15) return 15;
  return Number(result.toFixed(2));
};
