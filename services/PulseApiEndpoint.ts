import { AxiosError, AxiosResponse } from "axios";
import { pulseApiInstance } from "./instance";

/**
 * Retourne la listes des appareils connecté
 */
export const getDeviceConnected = async () => {
  try {
    const res: AxiosResponse = await pulseApiInstance.get("/discoveredDevice");
    return res.data;
  } catch (error: any) {
    if (error.response) {
      throw error.response.data;
    }
    throw error;
  }
};
