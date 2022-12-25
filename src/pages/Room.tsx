import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Chip } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { purple } from "@mui/material/colors";

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="hotelroom.jpg"
          alt="Room"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <Chip
              sx={{ mr: 2, color: "success.main" }}
              label="Booked"
              icon={<CheckCircleOutlineIcon color="success" />}
            />
            <Chip
              sx={{ color: "secondary.main" }}
              label="Balance Dew-$1,234"
              icon={<MonetizationOnIcon sx={{ color: purple[200] }} />}
              variant="outlined"
            />
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Room Type Description
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "info.main" }}
            color="text.secondary"
          >
            <ModeEditIcon /> Modify
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "info.main" }}
            color="text.secondary"
          >
            <MonetizationOnIcon />
            Make Payment
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

const Rooms = "Room";
export { Rooms };
