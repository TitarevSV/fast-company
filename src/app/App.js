import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Users from "./loyouts/users";
import Main from "./loyouts/main";
import Login from "./loyouts/login";
import NavBar from "./components/navbar";

function App() {
    return (
        <>
            <NavBar />
            <Switch>
                <Route path="/users/:userId?" component={Users} />
                <Route path="/login" component={Login} />
                <Route path="/" component={Main} />
                <Redirect path="/" />
            </Switch>
        </>
    );
}

export default App;
