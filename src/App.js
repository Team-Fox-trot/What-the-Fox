import React from 'react';
import axios from 'axios';

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

import { Carousel, Button } from 'react-bootstrap';

const SERVER = process.env.REACT_APP_SERVER;

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      allFoxes: [],
      foxMemes: [],
    }
  }

  /* Done: Make a GET request to API to fetch fox data from the database  */
  getFoxes = async () => {

    try {

      let results = await axios.get(`${SERVER}/foxMemes`);
      // console.log(results)

      this.setState({
        allFoxes: results.data
      })

    } catch (error) {

      console.log('Error:', error.response.data)

    }
  }

  /* Generate five random foxes from allFoxes array, ensure they don't repeat */ 
  selectRandomFox = () => {
    return Math.floor(Math.random() * this.state.allFoxes.length);
  }

  fiveRandomFoxes = () => {
    let randomFoxesArray = [];

    while (randomFoxesArray.length < 10) {

      let randomFox = this.selectRandomFox();

      if (!randomFoxesArray.includes(randomFox)) {
        randomFoxesArray.push(randomFox);
      }
    }
    let fox1 = randomFoxesArray.shift();
    let fox2 = randomFoxesArray.shift();
    let fox3 = randomFoxesArray.shift();
    let fox4 = randomFoxesArray.shift();
    let fox5 = randomFoxesArray.shift();

    // // How do I render these carousel imgs to the carousel?
    // carouselImg1.src = this.allFoxes[fox1].src;
    // carouselImg2.src = this.allFoxes[fox2].src;
    // caourselImg3.src = this.allFoxes[fox3].src;
    // carouselImg4.src = this.allFoxes[fox4].src;
    // caourselImg5.src = this.allFoxes[fox5].src;
  }

  /* Add a function to create a new fox meme */
  postFoxMeme = async (newFoxMeme) => {
    try {

      let url = `${SERVER}/foxMemes`;
      let createdFoxMeme = await axios.post(url, newFoxMeme);

      this.setState({
        foxMemes: [...this.state.foxMemes, createdFoxMeme.data]
      })

    } catch (error) {

      console.log('Error: ', error.response.data)

    }
  }

   /* Add a function to delete a fox meme */
   deleteFoxMeme = async (id) => {
    try {
      let url = `${SERVER}/foxMemes/${id}`;

      await axios.delete(url);

      let updatedArrayOfMemes = this.state.books.filter(foxMeme => = foxMeme._id !== id);

      this.setState({
        foxMemes: updatedArrayOfMemes
      });

    } catch (error) {

      console.log('Error: ', error.response.data)

    }
  }

  /* Add a function to edit an existing meme */
  updateFoxMeme = async (memeToUpdate) => {
    try {
      let updatedMemeFromDatabase = await axios.put(`${process.env.REACT_APP_SERVER}/foxMemes/${memeToUpdate._id}`, memeToUpdate);

      let updatedMemes = this.state.foxMemes.map((meme) => {

        return foxMeme._id === memeToUpdate._id
          ?
          updatedMemeFromDatabase.data
          :
          meme
      });
      
      this.setState({
        foxMemes: updatedMemes
      });

    } catch (error) {
      this.setState({
        error: true,
        errorMessage: 'Error',
      });
      console.log(error)
    }
  }

  componentDidMount() {
    this.getFoxes();
  }

  render() {

    // this will probably be moved to carousel component?
    let carouselItems = this.state.foxMemes.map((updatedArrayOfMemes) => {
      return (


        <Carousel.Item key={foxMeme._id}>
          <img
            ???
          />

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
