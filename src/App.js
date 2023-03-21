import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Favorites from './Favorites';
import Aboutus from './AboutUs'
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>

        <Router>
          <Header />
          <Routes>
            <Route
            exact path="/"
            element={<Main />}>
            </Route>

            <Route
            exact path="/favorites"
            element={<Favorites />}>
            </Route>
            
            <Route
            exact path="/aboutus"
            element={<Aboutus />}>
            </Route>

          </Routes>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
