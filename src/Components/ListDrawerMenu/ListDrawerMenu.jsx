import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {NavLink} from "react-router-dom";

import menu from "../../Utils/menu.json";
import {Icon} from "@mui/material";

const ListDrawerMenu = () => {
    /*const [open, setOpen] = useState(false);
    const menuActivo = useRef();

    const handleClick = () => {
        setOpen(!open)
    }

    const checkActive = (match, location) => {
        console.log(match)
    }*/

    return(
        <List>
            {
                menu.options.map((e) => {
                    return(
                        <ListItemButton
                            key={e.id}
                            component={NavLink}
                            to={e.path}
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