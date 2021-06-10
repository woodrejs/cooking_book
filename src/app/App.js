import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//pages
import Home from "./pages/Home";
import Panel from "./pages/Panel";
import Success from "./pages/Success";
import Failed from "./pages/Failed";
//style
import "./style/index.scss";
import ProgressBar from "./components/ProgressBar";

const App = () => {
  return (
    <main>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/panel" component={Panel} />
          <Route path="/success" component={Success} />
          <Route path="/failed" component={Failed} />
        </Switch>
      </Router>
    </main>
  );
};

export default App;
