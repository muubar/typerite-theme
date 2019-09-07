import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, Redirect, BrowserRouter as Router } from "react-router-dom";

import Home from "./components/pages/homePage";
import StandardPost from "./components/pages/standardPostPage"

function Routing() {
  return (
    < Router >
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/posts/standard-post" component={StandardPost} />
        <Redirect to="/" />
      </Switch>
    </Router >
  )
}

ReactDOM.render(<Routing />, document.getElementById('root'));