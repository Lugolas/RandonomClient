import React, { Component } from "react";
import logo from "./logo.svg";
import { Button, Layout, Row, Menu, Breadcrumb } from "antd";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";

const { Header, Footer, Sider, Content } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      // //Maintenant
      // <Router>
      //   <div className="App">
      //     <Header className="App-header">
      //       <img src={logo} className="App-logo" alt="logo" />
      //       <p>
      //         Le processus <code>grulo.work</code> est en cours.
      //       </p>
      //     </Header>
      //     <Content>
      //       <Route exact path="/" component={Home} />
      //     </Content>
      //     <Footer className="footer">Inspiré de faits réels</Footer>
      //   </div>
      // </Router>

      //Un beau layout Ant design tout prêt
      <Router>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              style={{ lineHeight: "64px" }}
            >
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: "0 50px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
              <Route exact path="/" component={Home} />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Randonom ©2018 Created by Grulos Corp
          </Footer>
        </Layout>
      </Router>
    );
  }
}

export default App;
