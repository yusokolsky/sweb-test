import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SupportPage from "./Components/Support-Help";
import { BrowserRouter as Router,Switch,
    Route, Redirect} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Switch>
              <Route path="/:tabName">
                  <SupportPage />
              </Route>
              <Route path='*'>
                  <Redirect to="/logbook" />
              </Route>
          </Switch>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

