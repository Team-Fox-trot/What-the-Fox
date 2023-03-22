import React from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import './Header.css'
import Favorites from './Favorites';
import Aboutus from './AboutUs'

import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


class FoxPictures {
  constructor(foxObj){
    this.src = foxObj.image;  
  }
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      allFoxes: [],
      foxMemes: [],
      userInput: ''
    }
  }

  /* Done: Make a GET request to API to fetch fox data from the database  */
  getFoxes = async () => {
    try {
      let results = await axios.get(`https://randomfox.ca/floof/`);
      let newFoxPic = new FoxPictures(results.data);
      // console.log(results);
      return newFoxPic;
    } catch (error) {
      console.log('Error:', error.response.data)
    }
  }

  fiveRandomFoxes = async () => {
    let randomFoxesArray = [];
    while (randomFoxesArray.length < 5) {
      let randomFox =  await this.getFoxes();
      randomFoxesArray.push(randomFox);
    }
    this.setState({
      allFoxes: randomFoxesArray
    })
  };

  foxFromDBtoFav = async () => {
    let results = await axios.get(`${process.env.REACT_APP_SERVER}/foxMemes`);
    let foxMemesFromDB = results.data;
    this.setState({
      foxMemes: foxMemesFromDB,
    })
    console.log(this.state.foxMemes);
  };

  deleteFoxMeme = async (id) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/foxMemes/${id}`;
      await axios.delete(url);
      this.foxFromDBtoFav();
      // let updatedArrayOfMemes = this.state.books.filter(foxMeme => foxMeme._id !== id);

      // this.setState({
      //   foxMemes: updatedArrayOfMemes
      // });

    } catch (error) {

      console.log('Error: ', error.response.data)

    }
  }

  /* Add a function to create a new fox meme 
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
*/
  componentDidMount() {
    this.fiveRandomFoxes();
    // this.foxFromDBtoFav();
  }

  render() {

    // this will probably be moved to carousel component?
    return (
      <>
        <Router>
          <Header />
          <Routes>
            {this.state.allFoxes.length > 0 &&
            <>
            <Route
            exact path="/"
            element={<Main 
              allFoxes={this.state.allFoxes}
              userInput={this.state.userInput}
            />}>
            </Route>
            </>
            }

            <Route
            exact path="/favorites"
            element={<Favorites
              foxMemes={this.state.foxMemes}
              deleteFoxMeme={this.deleteFoxMeme}
              foxFromDBtoFav={this.foxFromDBtoFav}
            />}>
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
