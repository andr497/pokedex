import React from "react";
import Main from "./Pages/Main";
import {BrowserRouter, Switch, Route} from "react-router-dom";

const App = () => {

    return(
        <>
            <BrowserRouter>
                <Switch>
                    <Route path={"/"} exact component={Main} />
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
