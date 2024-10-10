/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
};

export const DEVICE_CARD_COLORS = {
  default: {
    background: ["bg-white", "border", "border-gray-300", "rounded", "p-3", "relative"],
    text: ["text-red-500"],
    border: ["border-red-200"],
  },
  selected: {
    background: ["bg-cyan-200", "border-cyan-500"],
    text: ["text-cyan-900", "text-shadow"],
    border: ["border-cyan-500"],
  },
};
