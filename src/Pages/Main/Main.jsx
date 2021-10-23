import {Container, Grid} from "@mui/material";
import MiniDrawer from "../../Components/MiniDrawer";
import {useEffect, useState} from "react";
import {getListPokemon, getPokemon} from "../../Api/pokemon";
import MyCard from "../../Components/MyCard";

const Main = () => {

    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        getListPokemon().then(({results}) => {
            setPokemon(results)
        })
    }, [])

    console.log(pokemon)

    return(
        <MiniDrawer>
            <Grid container spacing={2} justifyContent="space-around">
                {
                    pokemon?.map((e, i) => {
                        return(
                            <MyCard key={i} name={e.name} url={e.url} />
                        );
                    })
                }
            </Grid>
        </MiniDrawer>
    );
}

export default Main;