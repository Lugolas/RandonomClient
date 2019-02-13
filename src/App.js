import React, { Component } from 'react';
import logo from './logo.svg';
import { Button, Layout, Row } from "antd";
import { BrowserRouter as Router, Route, } from "react-router-dom"
import Home from './components/Home'
import './App.css';

const { Header, Footer, Sider, Content, } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Le processus <code>grulo.work</code> est en cours.
            </p>
          </Header>
          <Content>
            <Route exact path="/" component={Home} />
            {/* <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />  */}
          </Content>
          <Footer>Inspiré de faits réels</Footer>
        </div>
      </Router>
    );
  }
}

export default App;
