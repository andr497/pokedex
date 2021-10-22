import React, {useEffect} from "react";
import {getListPokemon} from "./Api/pokemon";
import Main from "./Pages/Main";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {CssBaseline} from "@mui/material";

const App = () => {

    useEffect(() => {
        getListPokemon().then((res) => {
            console.log(res)
        })
    }, [])

    return(
        <BrowserRouter>
            <CssBaseline/>
            <Switch>
                <Route path={"/"} component={Main} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
