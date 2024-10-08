import { IP } from "@/constants/Networks";
import { MockMovieListInterface } from "@/interfaces/MockMoviContent";
const BASE_URL = "http://localhost:8080";

export const fetchMockContent = async (signal?: AbortSignal) => {
  try {
    const res = await fetch(`http://${IP}/mock/videoContent.json`, {
      method: "GET",
      signal,
    });

    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Failed to fetch");
    }
  } catch (error) {
    throw error;
  }
};
export const fetchMockAppContent = async (signal?: AbortSignal) => {
  try {
    const res = await fetch(`http://${IP}/mock/appContent.json`, {
      method: "GET",
      signal,
    });

    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Failed to fetch");
    }
  } catch (error) {
    throw error;
  }
};

export const fetchMockDeviceConnected = async (signal?: AbortSignal) => {
  try {
    const res = await fetch(`http://${IP}/mock/deviceConnected.json`, {
      method: "GET",
      signal,
    });

    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Failed to fetch");
    }
  } catch (error) {
    throw error;
  }
};

interface fetchApiInterface {
  endpoint: string;
  req?: Request;
  body?: BodyInit_ | undefined;
  method: string;
}
export const fetchApiMdm = async ({
  endpoint,
  req,
  body,
  method,
}: fetchApiInterface): Promise<MockMovieListInterface> => {
  const res = await fetch(`${BASE_URL}/${endpoint}`, {
    method,
    body: JSON.stringify(body),
    headers: req?.headers,
  });

  return res.json();
};
