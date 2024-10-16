import { Debugger } from "ts-debug";
import { logger, consoleTransport } from "react-native-logs";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const Config = { isProd: false };
const config = {
  levels: {
    debug: 0,
    log: 1,
    warn: 2,
    error: 3,
  },
  severity: "info",
  printLevel: false,
  printDate: true,
  transport: consoleTransport,
  transportOptions: {
    colors: {
      log: "green",
      info: "blueBright",
      warn: "yellowBright",
      error: "redBright",
    },

    extensionColors: {
      root: "magenta",
      home: "green",
    },
  },
};

const log = logger.createLogger(config);
//log.patchConsole();
export const debug = new Debugger(console, !Config.isProd, `[DEBUG] `);

export const wait = (delay: number) => {
  return new Promise((resolve) => setTimeout(() => resolve("resolved !"), delay));
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function extractValueFromKey(array: Array<any>, key: string): Array<any> | null {
  if (array) {
    return array.map((item) => item[key]);
  }
  return null;
}
