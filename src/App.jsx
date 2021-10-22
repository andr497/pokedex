import React, {useEffect} from "react";
import {getListPokemon} from "./Api/pokemon";
import Main from "./Pages/Main";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {CssBaseline} from "@mui/material";
import MiniDrawer from "./Components/MiniDrawer";

const App = () => {

    useEffect(() => {
        getListPokemon().then((res) => {
            console.log(res)
        })
    }, [])

    return(
        <>
            <MiniDrawer contenido={Main}>
                <BrowserRouter>
                    <Switch>
                        <Route path={"/"} exact component={<Main/>} />
                    </Switch>
                </BrowserRouter>
            </MiniDrawer>
        </>
    );
}

export default App;
