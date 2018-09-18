import React, {Component} from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

export class Main extends Component {
  render() {
    return (
      <BrowserRouter basename={window.appContextPath}>
        <div>
          <Switch>
            <Route
              path="/"
              render={() => <div>In the route</div>}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
