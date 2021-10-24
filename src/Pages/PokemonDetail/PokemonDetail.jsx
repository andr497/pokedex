import MiniDrawer from "../../Components/MiniDrawer";
import {useEffect, useState} from "react";
import {getPokemon} from "../../Api/pokemon";
import {useParams} from "react-router-dom";
import Box from "@mui/material/Box";
import styled from "@mui/styles/styled";
import {Container, Grid, Paper} from "@mui/material";
import MyLoader from "../../Components/MyLoader";
import {tipoColor} from "../../Utils/general";
import StatsPokemon from "../../Components/StatsPokemon";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const PokemonDetail = () => {

    const [pokemon, setPokemon] = useState({});
    const [loading, setLoading] = useState(false);

    let {id} = useParams();

    useEffect(() => {
        setLoading(true);
        getPokemon(id).then((res) => {
            setPokemon(res);
        }).then((res) => {
            setLoading(false)
        })
    },[id])

    console.log(pokemon)

    return(
        <MiniDrawer>
            <Grid component={Container} container spacing={2}>
                {
                    loading ? (
                        <MyLoader open={loading}/>
                    ) : (
                        <>
                            <Grid item xs={4} md={4}>
                                <Item>
                                    <img
                                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                                        alt={pokemon.name}
                                        width={"100%"}
                                    />
                                    {
                                        pokemon.types?.map(({type}) => {
                                            return(
                                                <>
                                                    <span style={{ background: tipoColor(type.name)["fondoColor"], color: tipoColor(type.name)["textoColor"] }}>{type.name} </span>
                                                </>
                                            );
                                        })
                                    }
                                </Item>
                            </Grid>
                            <Grid item xs={6} md={4}>
                                <Item>
                                    {
                                        pokemon.stats?.map(({base_stat, effort, stat}) => {
                                            return(
                                                <div>
                                                    <StatsPokemon
                                                        base_stat={base_stat}
                                                        effor={effort}
                                                        stat={stat}
                                                    />
                                                </div>
                                            );
                                        })
                                    }
                                </Item>
                            </Grid>
                            <Grid item xs={6} md={4}>
                                <Item>xs=6 md=4</Item>
                            </Grid>
                            <Grid item xs={6} md={8}>
                                <Item>xs=6 md=8</Item>
                            </Grid>
                        </>
                    )
                }
            </Grid>
        </MiniDrawer>
    );
}

export default PokemonDetail;