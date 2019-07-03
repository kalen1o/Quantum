import React, { Component } from 'react';
import './App.css';

import {Router, Route, Switch} from 'react-router-dom';
import { createBrowserHistory } from "history";

import Header from './components/Header';
import SideBar from './components/SideBar';

class App extends Component {
  state = {
    open: false
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleCloseSideBar)
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
        <Header open={this.state.open} onClickClose={this.handleCloseSideBar.bind(this)} />
          <SideBar open={this.state.open} onClickOpen={this.handleOpenSideBar.bind(this)} onClickClose={this.handleCloseSideBar.bind(this)}/>
        </Router>
      </div>
    )
  }
}

export default App;

