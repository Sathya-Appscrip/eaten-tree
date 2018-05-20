import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import DetailApp from './containers/Detail';

import CardWithAvatar from './components/card/card';

class App extends Component {
  render() {
    return (
      <div>
          <Switch>
            <Route path="/details" component={DetailApp} />
            <Route path="/" exact component={Home} />
          </Switch>
      </div>
    );
  }
}

export default App;
