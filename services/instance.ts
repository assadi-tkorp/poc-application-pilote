import { MDM_WEBSOCKET_URL } from "@/constants/Networks";

/**
 * instance webSocket Pulse
 */
export const pulseWebSocketInstance = new WebSocket(MDM_WEBSOCKET_URL);
