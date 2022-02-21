import { Switch,Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";

const Rotas = () => {
    return (
        <>
            <Switch>
                <Route exact path={"/"}>
                    <HomePage/>
                </Route>
            </Switch>
        </>
    )
}

export default Rotas;