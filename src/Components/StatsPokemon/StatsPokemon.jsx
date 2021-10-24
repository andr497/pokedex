import {Icon, LinearProgress, Rating, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const StatsPokemon = (props) => {

    return(
        <Box sx={{ display: "flex", alignItems: 'center' }}>
            <Box sx={{ minWidth: 150 }}>
                <Typography variant={"subtitle1"}>
                    {props.stat.name.toUpperCase()}
                </Typography>
            </Box>
            <Box sx={{ width: '100%', ml: 1 }}>
                <LinearProgress variant="determinate" value={props.base_stat * 100 / 255} />
            </Box>
        </Box>
    );
}

export default StatsPokemon;