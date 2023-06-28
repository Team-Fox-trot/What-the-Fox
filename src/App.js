import React from 'react';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import './components/Header/Header.css'
import Collection from './pages/Collection';
import Aboutus from './pages/AboutUs'
import Spinner from './components/Spinner';
import { withAuth0 } from '@auth0/auth0-react';
import './App.css';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

let SERVER = process.env.REACT_APP_SERVER;

class FoxPictures {
  constructor(foxObj) {
    this.src = foxObj.image;
  }
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      allFoxes: [],
      foxMemes: [],
      userInput: '',
      musicButton: true,
      isLoading: true // Add isLoading state

    }
  }

  /* Done: Make a GET request to API to fetch fox data from the database  */
  getFoxes = async () => {
    try {
      let results = await axios.get(`https://randomfox.ca/floof/`);
      let newFoxPic = new FoxPictures(results.data);
      return newFoxPic;
    } catch (error) {
      console.log('Error:', error.response.data)
    }
  }

  fiveRandomFoxes = async () => {
    let randomFoxesArray = [];
    while (randomFoxesArray.length < 5) {
      let randomFox = await this.getFoxes();
      randomFoxesArray.push(randomFox);
    }
    this.setState({
      allFoxes: randomFoxesArray,
      isLoading: false // Set isLoading to false after fetching data
    })
  };


  foxFromDBtoFav = async () => {
    try {
      //auth0
      if (this.props.auth0.isAuthenticated) {
        const res = await this.props.auth0.getIdTokenClaims();
        const jwt = res.__raw;
        const config = {
          method: 'get',
          baseURL: process.env.REACT_APP_SERVER,
          url: '/foxMemes',
          headers: {
            "Authorization": `Bearer ${jwt}`
          }
        }
        let results = await axios(config);
        let foxMemesFromDB = results.data;
        this.setState({
          foxMemes: foxMemesFromDB,
        })
      };
    } catch (error) {
      console.log('there is an error: ', error.response.data)
    }
  }


  handleOnChange = (e) => {
    this.setState({
      userInput: e.target.value
    })
  }


  handleFoxSubmit = (dataFromFoxCarousel) => {
    let newFoxMeme = dataFromFoxCarousel;
    this.postFoxMeme(newFoxMeme);
  }

  // Add a function to create a new fox meme 
  postFoxMeme = async (newFoxMeme) => {
    try {

      let url = `${SERVER}/foxMemes`;
      console.log(newFoxMeme)
      let createdFoxMeme = await axios.post(url, newFoxMeme);
      console.log(createdFoxMeme);
      this.setState({
        foxMemes: [...this.state.foxMemes, createdFoxMeme.data]
      })
    } catch (error) {
      console.log('Error: ', error.response.data)
    }
  }


  deleteFoxMeme = async (id) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/foxMemes/${id}`;
      await axios.delete(url);
      this.foxFromDBtoFav();
    } catch (error) {

      console.log('Error: ', error.response.data)

    }
  }

  updateFoxMeme = async (updateFox) => {
    
   
    try {
      let updatedFoxFromDB = await axios.put(`${process.env.REACT_APP_SERVER}/foxMemes/${updateFox._id}`, updateFox);
      console.log(updatedFoxFromDB);
      this.foxFromDBtoFav();
    } catch (error) {
      console.log('error msg: ', error.response.data)
    }
  }

  componentDidMount() {
    this.fiveRandomFoxes();
    // this.foxFromDBtoFav();
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div className="loading-container">
          <Spinner />
          <div className="loading-text">Loading...</div>
        </div>
      );
    }
  
    return (
      <>
          <Header />
        <Router>
          <Routes>
            {this.state.allFoxes.length > 0 &&
              <>
                <Route
                  exact path="/"
                  element={<Main
                    allFoxes={this.state.allFoxes}
                    userInput={this.state.userInput}
                    handleFoxSubmit={this.handleFoxSubmit}
                    handleOnChange={this.handleOnChange}
                  />}>
                </Route>
              </>
            }

            <Route
              exact path="/favorites"
              element={this.props.auth0.isAuthenticated ? <Collection
                foxMemes={this.state.foxMemes}
                deleteFoxMeme={this.deleteFoxMeme}
                updateFoxMeme={this.updateFoxMeme}
                foxFromDBtoFav={this.foxFromDBtoFav}
              />: null}>
            </Route>

            <Route
            exact path="/aboutus"
            element={<Aboutus 
            musicButton={this.state.musicButton}
            />}>
            </Route>

          </Routes>
          <Footer />
        </Router>
      </>
    )
  }
}

export default withAuth0(App);
