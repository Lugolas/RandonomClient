import React, { Component } from "react";
import { Layout, Menu, } from "antd";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import NamesForm from "./components/NamesForm";
import RandonAuth from "./components/RandonAuth";
import "./App.css";

const { Header, Footer, Content } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.RandonAuth = React.createRef();
    this.state = {};
  }

  authClick = () =>{
    this.RandonAuth.current.onClick();
  };

  render() {
    return (
      <Router>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              style={{ lineHeight: "64px" }}
            >
              <Menu.Item key="1"><Link to="/"></Link>Accueil</Menu.Item>
              <Menu.Item key="2"><Link to="/create-names"></Link>Créer noms</Menu.Item>
              <Menu.Item disabled={true} key="3">Créer extensions</Menu.Item>
              <Menu.Item style={{float: "right"}} onClick={this.authClick}><RandonAuth ref={this.RandonAuth}></RandonAuth></Menu.Item>
              
            </Menu>
          </Header>
          <Content style={{ padding: "0 50px" }}>
            {/* <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}
            <div style={{ background: "#fff", padding: 24, minHeight: 280, marginTop: 16 }}>
              <Route exact path="/" component={Home} />
              <Route exact path="/create-names" component={NamesForm} />
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
