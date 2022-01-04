import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Avaliacao } from "../pages/avaliacao"
import { 404 } from "../components/404"

export const Routes = () => (
    <Router>
    <Switch >
    <Route exact path='/:token'>
    <Avaliacao />
    </Route>
    <Route path="*">
    <404/>
    </Route>
    </Switch>
    </Router>
    )