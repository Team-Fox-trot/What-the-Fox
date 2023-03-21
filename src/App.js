import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
      <p>this is from app.js</p>
      <Header />
      <Main />
      <Footer />
      </>
    )
  }
}

export default App;
