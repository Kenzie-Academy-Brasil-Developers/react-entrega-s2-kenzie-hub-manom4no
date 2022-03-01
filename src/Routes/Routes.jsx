import { Switch,Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import LoginPage from "../Pages/LoginPage";
import SignUpPage from "../Pages/SignUpPage";
import { useState } from "react";

const Routes = () => {
    const [ authentication,setAuthentication ] = useState(false);
    
    return (
        <>
            <Switch>
                <Route exact path={"/"}>
                    <LoginPage authentication={authentication} setAuthentication={setAuthentication} />
                </Route>
                <Route exact path={"/cadastro"}>
                    <SignUpPage />
                </Route>
                <Route exact path={"/dashboard"}>
                    <Dashboard authentication={authentication} setAuthentication={setAuthentication} />
                </Route>
            </Switch>
        </>
    )
}

export default Routes;