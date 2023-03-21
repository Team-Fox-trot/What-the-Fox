import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import './Header.css'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
      <Header />
      <p>this is from app.js</p>
      <Main />
      <Footer />
      </>
    )
  }
}

export default App;
