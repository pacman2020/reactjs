import { BrowserRouter, Route, Switch } from "react-router-dom";
import ListTasks from './pages/list/ListTasks';
import FormTasks from './pages/form/FormTask';
import About from './pages/about/About';


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