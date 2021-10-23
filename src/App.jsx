import React from "react";
import PokemonList from "./Pages/PokemonList";
import {BrowserRouter, Switch, Route} from "react-router-dom";

const App = () => {

    return(
        <>
            <BrowserRouter>
                <Switch>
                    <Route path={"/pokemons"} exact component={PokemonList} />
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
