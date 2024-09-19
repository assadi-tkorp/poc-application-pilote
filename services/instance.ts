import { MDM_API_URL, MDM_WEBSOCKET_URL } from "@/constants/Networks";
import axios from "axios";

/**
 * Instance webSocket Pulse
 */
export const pulseWebSocketInstance = new WebSocket(MDM_WEBSOCKET_URL);

/**
 * Instance ApiRest Pulse avec axios

 */
export const pulseApiInstance = axios.create({ baseURL: `${MDM_API_URL}` });
