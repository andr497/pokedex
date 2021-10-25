import React, {useMemo, useState} from "react";
import PokemonList from "./Pages/PokemonList";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import {ColorModeContext} from "./Context/ColorModeContext";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import Main from "./Pages/Main";
//import NotFound from "./Pages/NotFound";
import PokemonDetail from "./Pages/PokemonDetail";
import MiniDrawer from "./Components/MiniDrawer";

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
                personal: {
                    main: mode === 'light' ? "#3f51b5" : "#3f51b5",
                    light: mode === 'light' ? "rgb(101, 115, 195)" : "rgb(101, 115, 195)",
                    dark: mode === 'light' ? "rgb(44, 56, 126)" : "rgb(44, 56, 126)",
                    contrastText: mode === 'light' ? "#fff" : "#fff"
                }
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
                        <MiniDrawer>
                            <Route path={"/"} exact component={Main}/>
                            <Route path={"/pokemons"} exact component={PokemonList} />
                            <Route path={"/pokemon/:id"} exact component={PokemonDetail}/>
                            {/*TODO: Agregar pagina NotFound*/}
                        </MiniDrawer>
                    </Switch>
                </BrowserRouter>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
