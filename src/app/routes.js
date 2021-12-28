import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Avaliacao } from "../pages/avaliacao"

export const Routes = () => (
    <Router>
        <Switch >
            <Route path='/:token'>
                <Avaliacao />
            </Route>
        </Switch>
    </Router>
)