import React, {useMemo, useState} from "react";
import PokemonList from "./Pages/PokemonList";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import {ColorModeContext} from "./Context/ColorModeContext";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import Main from "./Pages/Main";
import NotFound from "./Pages/NotFound";
import PokemonDetail from "./Pages/PokemonDetail";

let initialModeState = localStorage.getItem("mode") !== null ? localStorage.getItem("mode") : 'light'

const App = () => {
    const [mode, setMode] = useState(initialModeState);
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
            },
        }),
        [],
    );

    const theme = useMemo(
        () => createTheme({
            palette:{
                mode,
            }
        }),
        [mode]
    );

    return(
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <BrowserRouter>
                    <Switch>
                        <Route path={"/"} exact component={Main}/>
                        <Route path={"/pokemons"} exact component={PokemonList} />
                        <Route path={"/pokemon/:id"} exact component={PokemonDetail}/>
                        <Route path={"*"} component={NotFound}/>
                    </Switch>
                </BrowserRouter>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
