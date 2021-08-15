import { BrowserRouter, Route, Switch } from "react-router-dom";
import FormTasks from './compontens/FormTask';
import About from './pages/about/About';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={FormTasks} />
            <Route exact path="/about" component={About} />
        </Switch>
    </BrowserRouter>
)

export default Routes