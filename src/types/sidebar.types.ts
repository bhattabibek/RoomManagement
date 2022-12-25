export type SidebarProps = {
  window?: () => Window;
  drawerWidth: number;
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}