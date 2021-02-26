import React from "react"
import { HashRouter, Route, Switch, } from "react-router-dom"

import LoginPage from "./pages/login"

export const App: React.FC = () => {
    return (
        <div>
            <HashRouter>
                <Switch>
                    <Route path="/login" exact component={LoginPage}></Route>
                </Switch>
            </HashRouter>
        </div>
    )
}