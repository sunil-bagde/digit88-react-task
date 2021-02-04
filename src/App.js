import Employees from "./components/Employees";
import ShowEmployeesDetials from "./components/Employees/ShowEmployeesDetials";
import NoMatch from "./components/NotMatch";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/employees/:id">
            <ShowEmployeesDetials />
          </Route>

          <Route exact path="/employees">
            <Employees />
          </Route>
          <Route exact path="/" render={() => <Redirect to="/employees" />} />

          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
