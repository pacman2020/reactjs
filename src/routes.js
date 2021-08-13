import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ListTasks from './pages/ListTasks';
import FormTasks from './pages/FormTask';
import About from './pages/About';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ListTasks} />
            <Route exact path="/new" component={FormTasks} />
            <Route exact path="/about" component={About} />
        </Switch>
    </BrowserRouter>
)

export default Routes