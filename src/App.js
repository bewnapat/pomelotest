import React, { Component } from "react";
import './App.css';
import { Layout, Divider } from 'antd';
import { Space } from 'antd';
import { BackTop } from 'antd';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import News from "./News";
import Home from "./Home";

const { Content, Footer } = Layout;

const App = () => {
  return (
    <HashRouter>
    <div className="App">
      <header style={{ backgroundColor: 'white', height: '45px', padding: '10px', textAlign: 'left'}}>
        <Space>
          <NavLink exact to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/5/58/NewYorkTimes.svg" alt="logo"/></NavLink>
          <Divider type="vertical"></Divider>
          <NavLink to="/news">News</NavLink>
        </Space>
      </header>
      <Content>
        <Route exact path="/" component={Home}/>
        <Route path="/news" component={News}/>
      </Content>
      <Footer>
        <BackTop />
        Created by Napat Termpati
      </Footer>
    </div>
    </HashRouter>
  );
}

export default App;