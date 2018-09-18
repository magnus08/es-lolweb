import React, {Component} from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {get} from '../utils/fetchOptions';
export class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      msg: "...connecting"
    };
  }

  componentDidMount() {
    this._testEndpoint();
  }

  _testEndpoint = async () => {
    try {
      const resp = await fetch(window.appState.config.apiUrls.blurp + "/participation/Oyvzt3dvtijkmidOSjn6/activity/340fb9b5-f318-49ea-be74-b14debf01312", get());
      if(resp.status !== 200) {
        this.setState({msg: "Got http status: " + resp.status});
        console.log("res = ", resp);
      } else {
        const data = await resp.json();
        console.log("Data = ", data);
        this.setState({msg: "Now rendering activity '" + data.activity.title + "'"});
      }
    } catch(e) {
      this.setState({msg: "Got an error from fetch: " + e});
      console.log("error = ", e);
    }
  };

  render() {
    const {msg} = this.state;
    return (
      <BrowserRouter basename={window.appContextPath}>
        <div>
          <Switch>
            <Route
              path="/"
              render={() => <div>{msg}</div>}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
