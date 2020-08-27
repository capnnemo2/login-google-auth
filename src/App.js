import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" component={Login} />
          <Route path="/home" component={Home} />
        </Switch>
      </div>
    );
  }
}
