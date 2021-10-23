import {Card, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";

import useStyles from './styles'

const MyCard = (props) => {
    const classes = useStyles();

    return(
        <Card className={classes.card} key={props.index} sx={{ width: 200 }}>
            <CardMedia
                component="img"
                alt={`${props.name}`}
                image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.url.split("/")[6]}.png`}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.name.toUpperCase()}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default MyCard;
