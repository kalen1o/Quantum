import React, { Component } from 'react';
import './App.css';

import {Router, Route, Switch} from 'react-router-dom';
import { createBrowserHistory } from "history";

import Header from './components/Header';
import SideBar from './components/SideBar';
import MainPage from './screens/MainPage';

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
    return (
      <div className="App">
        <Router history = { createBrowserHistory() }> 
        <Header open={this.state.open} onClickClose={this.handleCloseSideBar} />
        <div className="content-wrapper">
          <SideBar open={this.state.open} onClickOpen={this.handleOpenSideBar}/>
          <Switch>
            <Route path="/" component = { MainPage } exact />
          </Switch>
        </div>
        </Router>
      </div>
    )
  }
}

export default App;

