import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import FaceIcon from "@mui/icons-material/Face";
import { grey } from "@mui/material/colors";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import CloseIcon from "@mui/icons-material/Close";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";

const drawerWidth = 510;

export default function ClippedDrawer() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            <FaceIcon color="action" sx={{ color: grey[50], mr: 1, mt: 1 }} />
            Account Name
            <br />
            account@gmail.com
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {[
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <WorkOutlineIcon style={{ fill: "#0072ea" }} sx={{ mr: 1 }} />
                <span>
                  My Trips
                  <br />
                  View and Manage Tour Travels
                </span>
              </div>,
              <div>
                <DirectionsBusIcon style={{ fill: "#0072ea" }} sx={{ mr: 2 }} />
                <span>
                  Manage Transfer
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Book or Modify
                  Transportation
                </span>
              </div>,
              <div>
                <MonetizationOnIcon
                  style={{ fill: "#0072ea" }}
                  sx={{ mr: 2 }}
                />
                <span>
                  Make a Payment
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Make and view
                  Payment History{" "}
                </span>
              </div>,
              <div>
                {" "}
                <AddLocationAltIcon
                  style={{ fill: "#0072ea" }}
                  sx={{ mr: 2 }}
                />
                <span>
                  Modify My Reservation
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Make changes and see
                  Pricing
                </span>
              </div>,
              <div>
                <CloseIcon style={{ fill: "#0072ea" }} sx={{ mr: 2 }} />
                <span>
                  Cancel My Reservation
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Review Polcies and
                  Cancel
                </span>
              </div>,
              <div>
                <MeetingRoomIcon style={{ fill: "#0072ea" }} sx={{ mr: 2 }} />
                <span>
                  Room Management
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Manage Rooms
                </span>
              </div>,
            ].map((text, index) => (
              <ListItem>
                <ListItemButton>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
const Account = "AccountName";

export { Account };
