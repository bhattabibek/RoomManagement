import { createSlice, createAsyncThunk, AsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction, AnyAction } from "@reduxjs/toolkit";

import { Room } from "../services/room.service";

interface RoomState {
 
  rooms: any;
  fetching: "pending" | "fullfiled";
}

const initialState: RoomState = {
  rooms: {},
  fetching: "pending",  
};

const roomSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {},
  extraReducers: (builder) => { 
      builder.addCase(fetchRoomsById.fulfilled, (state, action) => {
        state.rooms = action.payload;
        state.fetching = "fullfiled";
      });
  },
});

export const fetchRoomsById: any = createAsyncThunk( 
  "/rooms/fetch",
  async (id: string) => {
    const response = await Room.getRoomsById(id); 
    const [data] = response.data.roomInfo;
    return data;
  }
);

export default roomSlice.reducer;
