import React from "react";
import { Chip, Divider } from "@mui/material";
import KeyIcon from "@mui/icons-material/Key";
import { Typography } from "@mui/material";
const MyRooms = () => {
  return (
    <div>
      <Typography>My Rooms</Typography>
      <Divider/>
      <br />
      <Chip label="Room one" sx={{ mt: 2, mr: 2 }} />
      <Chip label="Room Two" sx={{ mt: 2, mr: 2 }} variant="outlined" />
      <Chip label="Room Three" sx={{ mt: 2, mr: 2 }} />
      <Chip label="Room Four" sx={{ mt: 2 }} variant="outlined" />
      <br />
      <KeyIcon color="primary" fontSize="large" /> Room NickName
      <br/> <br />
      Group Name
      <br/>
      <br />
      HotelName- Room Type<br/> <br/>11/12/2023-12/12/2023
    </div>
  );
};

export default MyRooms;
