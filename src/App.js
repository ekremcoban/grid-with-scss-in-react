import React, { Component } from 'react';
import './App.scss';
import Header from './modules/header/components/header';
import Test1 from './modules/test/test1';
import GridTest from './modules/grid-test/grid-test';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Test1 />
        <GridTest/>
      </div>
    );
  }
}

export default App;
