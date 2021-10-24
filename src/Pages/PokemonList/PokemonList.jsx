import {Container, Grid, Paper} from "@mui/material";
import MiniDrawer from "../../Components/MiniDrawer";
import {useEffect, useRef, useState} from "react";
import {getListPokemon} from "../../Api/pokemon";
import MyCard from "../../Components/MyCard";
import MyPagination from "../../Components/MyPagination";
import {useLocation, useParams} from "react-router-dom";
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
        }).then((res) => {
            setLoading(false);
        })
    }, [page])

    return(
        <MiniDrawer>
            <Grid container>
                <MyPagination page={page} count={countPages.current}/>
            </Grid>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    loading ? (
                        <MyLoader open={loading}/>
                    ) : (
                        pokemon?.map((e, i) => {
                            return(
                                <Grid key={i} item xs={2} sm={2} md={3}>
                                    <Paper>
                                        <MyCard index={i} name={e.name} url={e.url} />
                                    </Paper>
                                </Grid>
                            );
                        })
                    )
                }
            </Grid>
        </MiniDrawer>
    );
}

export default PokemonList;