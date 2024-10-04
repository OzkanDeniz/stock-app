import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AppsIcon from "@mui/icons-material/Apps";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import StoreIcon from "@mui/icons-material/Store";
import StarsIcon from "@mui/icons-material/Stars";
import InventoryIcon from "@mui/icons-material/Inventory";
import { useNavigate } from "react-router-dom";

const MenuListItems = () => {
  const navigate = useNavigate();
  const icons = [
    {
      tittle: "Dashboard",
      icon: <AppsIcon />,
      path: "/stock",
    },
    {
      tittle: "Purchases",
      icon: <ShoppingBasketIcon />,
      path: "/purchases/",
    },
    {
      tittle: "Sales",
      icon: <AttachMoneyIcon />,
      path: "/sales/",
    },
    {
      tittle: "Firms",
      icon: <StoreIcon />,
      path: "/firms/",
    },
    {
      tittle: "Brands",
      icon: <StarsIcon />,
      path: "/brands/",
    },
    {
      tittle: "Products",
      icon: <InventoryIcon />,
      path: "/products/",
    },
  ];

  return (
    <div>
      <List>
        {icons.map((item, index) => (
          <ListItem
            key={index}
            disablePadding
            onClick={() => navigate(item.path)}
          >
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.tittle} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default MenuListItems;
