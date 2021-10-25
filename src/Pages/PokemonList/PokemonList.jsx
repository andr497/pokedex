import {Grid, Paper} from "@mui/material";
import {useEffect, useRef, useState} from "react";
import {getListPokemon} from "../../Api/pokemon";
import MyCard from "../../Components/MyCard";
import MyPagination from "../../Components/MyPagination";
import MyLoader from "../../Components/MyLoader";

const PokemonList = () => {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(false);

    let countPages = useRef(0)

    const query = new URLSearchParams(window.location.search);
    const page = parseInt(query.get('page') || '1', 10);

    useEffect(() => {
        setLoading(true);
        getListPokemon(page).then(({results, count}) => {
            countPages.current = Math.trunc(count / 20)
            setPokemon(results)
        }).then(() => {
            setLoading(false);
        })
    }, [page])

    return(
        <Grid padding={1} container spacing={{ xs: 1, md: 3, lg: 5 }} columns={{ xs: 4, sm: 6, md: 8, lg: 12 }}>
            <Grid item xs={12} justifyItems={"center"}>
                <MyPagination page={page} count={countPages.current}/>
            </Grid>
            {
                loading ? (
                    <MyLoader open={loading}/>
                ) : (
                    pokemon?.map((e, i) => {
                        return(
                            <Grid key={i} item xs={2} sm={2} md={2}>
                                <Paper>
                                    <MyCard
                                        index={i}
                                        name={e.name}
                                        pokemonId={e.url.split("/")[6]}
                                        url={e.url}
                                    />
                                </Paper>
                            </Grid>
                        );
                    })
                )
            }
        </Grid>
    );
}

export default PokemonList;