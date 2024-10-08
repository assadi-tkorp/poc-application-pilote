import { Debugger } from "ts-debug";
const Config = { isProd: false };
import { logger, consoleTransport } from "react-native-logs";

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
