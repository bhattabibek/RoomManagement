import type { FC } from "react";
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import type { SidebarProps } from "../types/sidebar.types";
import BusAlertIcon from '@mui/icons-material/BusAlert';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import CancelIcon from '@mui/icons-material/Cancel';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import GroupIcon from '@mui/icons-material/Group';
import {
  Box,
  Divider,
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Typography,
} from "@mui/material";

import InboxIcon from "@mui/icons-material/MoveToInbox";
import ListItemIcon from "@mui/material/ListItemIcon";
import MailIcon from "@mui/icons-material/Mail";

const SidebarContent = [
  {
    title: "My Trips",
    subtitle: "View and Manage Tour Travel",
    icon: <WorkOutlineIcon style={{ color: '#2196f3' }}/>,
  },
  {
    title: "Manage Transfers",
    subtitle: "Book or Modify Transportation",
    icon: <BusAlertIcon style={{ color: '#2196f3' }}/>,
  },
  {
    title: "Make a Payment",
    subtitle:"Make and View Payment History",
    icon: <MonetizationOnIcon style={{ color: '#2196f3' }} />
  },
  {
    title: "Modify My Reservation",
    subtitle:"Make Changes and see pricing",
    icon: <AddLocationAltIcon style={{ color: '#2196f3' }}/>
  },
  {
    title: "Cancel My Reservation",
    subtitle:"Review Policies and Cancel",
    icon: <CancelIcon style={{ color: '#2196f3' }}/>
  },
  {
    title: "Room Management",
    subtitle:"Manange Room",
    icon: <MeetingRoomIcon style={{ color: '#2196f3' }}/>
  },

];

const Sidebar: FC<SidebarProps> = (props) => {
  const { window } = props;

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {SidebarContent.map((data, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>{data.icon}</ListItemIcon>
              <ListItemText primary={data.title} secondary={data.subtitle} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <Typography sx={{ ml: 2 }}>Account Management</Typography>
        {["My Profile", "Guests"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <PersonAddAltIcon style={{ color: '#2196f3' }} /> : <GroupIcon style={{ color: '#2196f3' }} />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <Box
      component="nav"
      sx={{ width: { sm: props.drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        container={container}
        variant="temporary"
        open={props.mobileOpen}
        onClose={props.handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: props.drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: props.drawerWidth,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
