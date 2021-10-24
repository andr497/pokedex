import {Card, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";

import useStyles from './styles'
import {useState} from "react";
import image from '../../Assets/img/img.png'

const MyCard = (props) => {
    const classes = useStyles();

    const [imageLoading, setImageLoading] = useState(false);

    return(
        <Card className={classes.card} key={props.index} >
            <CardMedia
                component="img"
                alt={`${props.name}`}
                image={imageLoading ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.url.split("/")[6]}.png` : image}
                onLoad={() => {setImageLoading(true)}}
            />
            <CardContent alignItems={"center"}>
                <Typography gutterBottom variant="h6">
                    {props.name.toUpperCase()}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default MyCard;
