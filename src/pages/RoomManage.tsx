import type { FC } from "react";
import { useState, useEffect } from "react";

import Background from "../assets/images/hotelroom.jpg";

import { Box, Divider, Tabs, Tab, Chip, Typography } from "@mui/material";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";

import { blue } from "@mui/material/colors";

import { Room } from "../services/room.service";

export const RoomManage: FC = () => {
  const [roomData, setRoomData] = useState<any>([]);
  const [fetching, setFetching] = useState(true);

  const fetchRooms = async (): Promise<void> => {
    const response = await Room.getRoomsById(
      "ceae0d77-2fd6-dbe3-0f33-61c355c106ff"
    );
    setRoomData(response.data.roomInfo[0]);
    setFetching(false);
    console.log(response.data.roomInfo[0]);
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  return !fetching ? (
    <>
      <Tabs
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="WAYNE ROOM" />
        <Tab value="two" label="DAVID ROOM" />
      </Tabs>
      <Typography paragraph>
        <MeetingRoomIcon sx={{ color: blue[500], mr: 1, mt: 1 }} />
        Wayne Room
        <br />
        <br />
        {roomData.room[0].roomType}
        <br />
        <br />
        September1, 2023 - september 3, 2024
        <br />
        <br />
        <Box
          component="img"
          sx={{
            height: 253,
            width: 400,
          }}
          alt="The house from the offer."
          src={roomData.hotel[0].hotelImage}
        />
      </Typography>
      <Chip
        label="Booked"
        sx={{ mr: 2 }}
        deleteIcon={<CheckCircleOutlineIcon sx={{ color: blue[500], m: 1 }} />}
      />
      <Chip
        label="Balance Dew - $700.98"
        deleteIcon={
          <MonetizationOnIcon sx={{ color: blue[500], m: 3, mt: 1 }} />
        }
        variant="outlined"
      />
      <Typography paragraph sx={{ m: 1 }}>
        {roomData.hotel[0].hotelDescription}
        <br />
        <EditLocationAltIcon sx={{ color: blue[500] }} /> Modify &nbsp;&nbsp;
        <MonetizationOnIcon sx={{ color: blue[500] }} /> Make Payment <br />
        <Divider />
        <br />
        Past Rooms
        <br />
        <MeetingRoomIcon sx={{ color: blue[500], mr: 1, mt: 1 }} />
        No Past Rooms
        <br />
        <br />
        We Couldn't Find Any Rooms in your Account
      </Typography>
    </>
  ) : (
    <></>
  );
};

export default RoomManage;
