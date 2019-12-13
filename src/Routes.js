import React from 'react';
import {HashRouter} from "react-router-dom";
import {Route, Switch, Redirect} from "react-router";

import App from "./App";
import Error from "./Error";

class Routes extends React.Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/">
                        <Redirect to={"/todos"}/>
                    </Route>
                    <Route exact path="/todos">
                        <App/>
                    </Route>
                    <Route exact path={"*"}>
                        <Error/>
                    </Route>
                </Switch>
            </HashRouter>
        );
    }
}

export default Routes;
