import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AppsIcon from '@mui/icons-material/Apps';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import StoreIcon from '@mui/icons-material/Store';
import StarsIcon from '@mui/icons-material/Stars';
import InventoryIcon from '@mui/icons-material/Inventory';

const MenuListItems = () => {

    const icons = [{
        tittle:"Dashboard",
        icon:<AppsIcon/>,
        path:"/"
    },
    {
        tittle:"Purchases",
        icon:<ShoppingBasketIcon/>,
        path:"/purchases"
    },
    {
        tittle:"Sales",
        icon:<AttachMoneyIcon/>,
        path:"/stock/sales/"
    },
    {
        tittle:"Firms",
        icon:<StoreIcon/>,
        path:"/stock/firms/"
    },
    {
        tittle:"Brands",
        icon:<StarsIcon/>,
        path:"/stock/brands/"
    },
    {
        tittle:"Products",
        icon:<InventoryIcon/>,
        path:"/stock/products/"
    }
]


  return (
    <div>
      <List>
        {icons.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.tittle} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default MenuListItems;
