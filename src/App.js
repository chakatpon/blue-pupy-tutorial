import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Happy from "./components/Happy";
import Lazy from "./components/Lazy";
import Smile from "./components/Smile";
import Nothing from "./components/Nothing";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Hello Blue Pupy</h1>

        <BrowserRouter>
          <Switch>
            <Route path="/happy" component={Happy}></Route>
            <Route path="/lazy" component={Lazy}></Route>
            <Route path="/smile" component={Smile}></Route>
            <Route path="/" component={Nothing}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
