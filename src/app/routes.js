import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { Rastreio } from "../pages/rastreio"
import { Avaliacao } from "../pages/avaliacao"

export const Routes = () => (
    <Router>
        <Switch >
            <Route path='/rastreio'>
                <Rastreio/>
            </Route>
        </Switch>
        <Switch >
            <Route path='/avaliacao'>
                <Avaliacao/>
            </Route>
        </Switch>
    </Router>
)