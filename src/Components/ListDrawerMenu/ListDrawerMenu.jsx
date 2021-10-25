import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {NavLink, useLocation} from "react-router-dom";

import menu from "../../Utils/menu.json";
import {Icon} from "@mui/material";
import {useState} from "react";

const ListDrawerMenu = () => {
    let currentLocation = useLocation().pathname;

    const [selectedIndex, setSelectedIndex] = useState(currentLocation);
    const handleListItemClick = (e, i) => {
        setSelectedIndex(i)
    }

    return(
        <List>
            {
                menu.options.map((e) => {
                    return(
                        <ListItemButton
                            key={e.id}
                            component={NavLink}
                            to={e.path}
                            selected={selectedIndex === e.path}
                            onClick={(e) => handleListItemClick(e, e.path)}
                        >
                            <ListItemIcon>
                                <Icon>{e.icon}</Icon>
                            </ListItemIcon>
                            <ListItemText primary={e.name} />
                        </ListItemButton>
                    );
                })
            }
            {/*<ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Starred" />
                    </ListItemButton>
                </List>
            </Collapse>*/}
        </List>
    );
}

export default ListDrawerMenu;