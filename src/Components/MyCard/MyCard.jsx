import {Card, CardActions, CardContent, CardMedia, Chip} from "@mui/material";
import Typography from "@mui/material/Typography";

import useStyles from './styles'
import {useState} from "react";
import image from '../../Assets/img/img.png'
import Divider from "@mui/material/Divider";

const MyCard = (props) => {
    const classes = useStyles();

    const [imageLoading, setImageLoading] = useState(false);

    const handleMouseEnter = (e) => {
        console.log(e)
    }

    return(
        <Card className={classes.card} key={props.index} >
            <CardMedia
                component="img"
                alt={`${props.name}`}
                image={imageLoading ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.pokemonId}.png` : image}
                onLoad={() => {setImageLoading(true)}}
            />
            <Divider/>
            <CardContent>
                <Typography
                    variant="h6"
                    align={"center"}
                    noWrap={true}
                    onMouseEnter={(e) => handleMouseEnter(e)}
                >
                    {props.name.toUpperCase()}
                </Typography>
            </CardContent>
            {
                !props.types ?? (
                    <CardActions>
                        <Chip size="small" label={"Holi"} />
                    </CardActions>
                )
            }
        </Card>
    )
}

export default MyCard;
