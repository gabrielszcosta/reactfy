import React, { Fragment } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import "./config/reactotron";

import GlobalStyle from "./styles/global";
import { Wrapper, Container, Content } from "./styles/components";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";

import Routes from "./routes";
import store from "./store";

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Provider store={store}>
      <BrowserRouter>
        <Wrapper>
          <Container>
            <Sidebar />
            <Content>
              <Header />
              <Routes />
            </Content>
          </Container>
          <Player />
        </Wrapper>
      </BrowserRouter>
    </Provider>
  </Fragment>
);

export default App;
