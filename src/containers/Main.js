import React, {Component} from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

export class Main extends Component {
  render() {
    const {config} = this.props;
    return (
      <BrowserRouter basename={config.contextPath}>
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
