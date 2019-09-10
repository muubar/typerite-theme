import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { Route, Switch, Redirect, BrowserRouter as Router } from "react-router-dom";

function minimumWaitTime(ms, dynamicImport) {
  return (Promise.all([delay(ms), dynamicImport])).then((result) => result[1]);

  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

//delay dynamic import to prevent loading spinner flashing
const FIRST_LOAD_MINIMUM_DELAY = 1000;
const StandardPost = lazy(() => minimumWaitTime(FIRST_LOAD_MINIMUM_DELAY, import('./components/pages/standardPostPage')));
const Contact = lazy(() => minimumWaitTime(FIRST_LOAD_MINIMUM_DELAY, import('./components/pages/contactPage')));
const Home = lazy(() => minimumWaitTime(FIRST_LOAD_MINIMUM_DELAY, import('./components/pages/homePage')));
const About = lazy(() => minimumWaitTime(FIRST_LOAD_MINIMUM_DELAY, import('./components/pages/aboutPage')));

import ScrollToTop from "./components/scrollToTop/scrollToTop";

const Loader = <div style={{
  position: "fixed", width: "300px", height: "60px", fontSize: "36px", fontFamily: "arial",
  top: "calc( 50% - 30px )", right: "calc( 50% - 200px )"
}}>
  Loading...
  </div>;

function Routing() {
  return (
    < Router >
      <ScrollToTop>
        <Suspense fallback={Loader}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/posts/standard-post" component={StandardPost} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </ScrollToTop>
    </Router >
  )
}

ReactDOM.render(<Routing />, document.getElementById('root'));