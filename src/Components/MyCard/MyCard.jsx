import {useEffect, useState} from "react";
import {getPokemon} from "../../Api/pokemon";
import {Button, Card, CardActions, CardContent, CardMedia, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";

const MyCard = (props) => {
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        getPokemon(props.url).then((res) => {
            setPokemon(res)
        })
    }, [props.url])

    console.log(pokemon)
/*
* <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing}>
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              <Paper sx={{ height: 140, width: 100 }} />
            </Grid>
          ))}
        </Grid>
      </Grid>
*
* */
    return(
        <Card key={props.key} component={Grid} item sx={{ maxWidth: "350px" }}>
            <CardMedia
                component="img"
                alt={`${props.name}`}
                image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon?.id}.png`}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default MyCard;
