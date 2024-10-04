import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AppsIcon from '@mui/icons-material/Apps';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

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
