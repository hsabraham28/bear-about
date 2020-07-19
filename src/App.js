import React from 'react';
import { Component } from 'react';
import './Assets/css/default.min.css';
import Header from './components/headerComponent/header';
import About from './components/aboutComponent/about';
import Meet from './components/meetComponent/meet';



class App extends Component {
  render() {
    return (
      <div className="App">

      <Header />

      <About />

      <Meet />
        
    </div>
      );
  }
}


export default App;
