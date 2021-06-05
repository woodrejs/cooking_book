import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//pages
import Home from "./pages/Home";
import Form from "./pages/Form";
import Success from "./pages/Success";
import Failed from "./pages/Failed";

const App = () => {
  return (
    <main>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/form" component={Form} />
          <Route path="/success" component={Success} />
          <Route path="/failed" component={Failed} />
        </Switch>
      </Router>
    </main>
  );
};

export default App;
