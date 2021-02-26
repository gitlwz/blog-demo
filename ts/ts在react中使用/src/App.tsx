import React from "react"
import { HashRouter, Route, Switch, } from "react-router-dom"
import LoginPage from "./pages/login"
import HomePage from "./pages/Home"

export default () => {
    return (
        <div>
            <HashRouter>
                <Switch>
                    <Route path="/" exact component={HomePage}></Route>
                    <Route path="/login" exact component={LoginPage}></Route>
                </Switch>
            </HashRouter>
        </div>
    )
}