import { BrowserRouter, Route, Switch } from "react-router-dom";
import ListTasks from './compontens/ListTasks';
import About from './pages/about/About';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ListTasks} />
            <Route exact path="/about" component={About} />
        </Switch>
    </BrowserRouter>
)

export default Routes