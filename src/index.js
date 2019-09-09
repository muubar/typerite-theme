import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { Route, Switch, Redirect, BrowserRouter as Router } from "react-router-dom";

const StandardPost = lazy(() => import('./components/pages/standardPostPage'));
const Contact = lazy(() => import('./components/pages/contactPage'));
const Home = lazy(() => import('./components/pages/homePage'));
const About = lazy(() => import('./components/pages/aboutPage'));

const Loader = <div style={{
  position: "fixed", width: "300px", height: "60px", fontSize: "36px", fontFamily: "arial",
  top: "calc( 50% - 30px )", right: "calc( 50% - 200px )"
}}>
  Loading...
  </div>;

function Routing() {
  return (
    < Router >
      <Suspense fallback={Loader}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/posts/standard-post" component={StandardPost} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Router >
  )
}

ReactDOM.render(<Routing />, document.getElementById('root'));