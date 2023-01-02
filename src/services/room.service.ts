import type { AxiosResponse } from "axios";
import http from "./http";

const getRoomsById = async (_id: string): Promise<AxiosResponse> => {
  return http.get(`/rooms?roomIds=${_id}`);
};

export const Room = { 
  getRoomsById,
};
