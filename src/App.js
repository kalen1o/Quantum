import React, { Component } from 'react';
import './App.css';

import {Router, Route, Switch} from 'react-router-dom';
import { createBrowserHistory } from "history";

import Header from './components/Header';
import SideBar from './components/SideBar';
import NotFound from './screens/NotFound';
import Login from './screens/Login';
import CommerceDashboard from './screens/CommerceDashboard';
import AnalyticsDashboard from './screens/AnalyticsDashboard';
import AllDeals from './screens/AllDeals';

import {Provider, connect}   from 'react-redux';
import {createStore} from 'redux';
import loginReducer from './store/reducers/loginReducer';

import users from './constants/users';

const store = createStore(loginReducer)

const history = createBrowserHistory()

class App extends Component {
  state = {
    open: false
  }

  handleOpenSideBar = () => {
    this.setState({open: true})
  }

  handleCloseSideBar = () => {
    this.setState({open: false})
  }

  render() {
    let user = users.find(person => person.login === this.props.login);
    return (
      <div className="App">
        <Router history = { history }> 
        <Header open={this.state.open} onClickClose={this.handleCloseSideBar} user={user} />
        <div className="wrapper">
          <SideBar open={this.state.open} onClickOpen={this.handleOpenSideBar}/>
          <div className="content-wrapper">
            <Switch>
              <Route path="/" component = { Login } exact />
              <Route path="/commerce-dashboard" render = { (props) => <CommerceDashboard {...props} user={user} /> } exact />
              <Route path="/analytics-dashboard" render = { (props) => <AnalyticsDashboard {...props} user={user} /> } exact />
              <Route path="/deals-dashboard" render = { (props) => <AllDeals {...props} user={user} /> } exact />
            </Switch>
          </div>
        </div>
        </Router>
      </div>
    )
  }
}

App = connect(state => ({login: state.login}), null)(App)

const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default AppWrapper;

