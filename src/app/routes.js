import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Avaliacao } from "../pages/avaliacao"
import { NotFound } from "../components/notFound"

export const Routes = () => (
    <Router>
    <Switch >
    <Route exact path='/:token'>
    <Avaliacao />
    </Route>
    <Route path="*">
    <NotFound/>
    </Route>
    </Switch>
    </Router>
    )