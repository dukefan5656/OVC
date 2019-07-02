import React from "react";
import Landing from "./components/Landing";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
      </Router>
    );
  }
}

export default App;
