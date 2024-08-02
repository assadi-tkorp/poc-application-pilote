import { MDM_WEBSOCKET_URL } from "@/constants/Networks";

/**
 * instance webSocket
 */
export const ws = new WebSocket(MDM_WEBSOCKET_URL);
