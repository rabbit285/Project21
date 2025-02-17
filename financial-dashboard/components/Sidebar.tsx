import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Home, AccountBalance, AccountCircle } from "@mui/icons-material";

export default function Sidebar() {
  return (
    <Drawer variant="permanent" className="w-60 bg-gray-800 text-white">
      <div className="flex items-center justify-center py-6 text-2xl font-bold">
        Financial Dashboard
      </div>
      <List>
        <ListItem component="a" href="/">
          <ListItemIcon>
            <Home className="text-white" />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem component="a" href="/transactions">
          <ListItemIcon>
            <AccountBalance className="text-white" />
          </ListItemIcon>
          <ListItemText primary="Transactions" />
        </ListItem>
        <ListItem component="a" href="/profile">
          <ListItemIcon>
            <AccountCircle className="text-white" />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
      </List>
    </Drawer>
  );
}
