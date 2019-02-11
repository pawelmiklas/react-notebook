import React, { Component } from 'react';
import Header from './header/Header';
import List from './list/List';
import { GlobalStyle } from './Style';

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle/>
        <Header/>
        <List/>
      </>
    );
  }
}

export default App;
