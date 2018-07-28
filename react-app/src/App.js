import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './page/home/Home';
import User from './page/user/User';
import About from './page/about/About';

class App extends Component {
  render() {
    return (
        <Router>
            <div className="App">
              <p>first creat</p>
              <ul>
                <li><Link to="/">主页</Link></li>
                <li><Link to="/about">关于</Link></li>
                <li><Link to="/user/10010/man">我们</Link></li>
              </ul>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/user/:id/:username" component={User}/>
              </Switch>
            </div>
        </Router>
    );
  }
}

export default App;
