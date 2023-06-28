import React from 'react';
import { withAuth0 } from "@auth0/auth0-react";
import FoxModal from '../../components/FoxModal'
import FoxCard from '../../components/FoxCard';
import './Favorites.css';


class Favorites extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      id: '',
      text: '',
      v: '',

    }
  }

  openModal = (id, text, imgUrl, v, memeURL) => {
    this.setState({
      showModal: true,
      id: id,
      text: text,
      imgUrl: imgUrl,
      v: v,
      memeURL: memeURL,
    })
    console.log(this.state);
  }

  closeModal = () => {
    this.setState({
      showModal: false,
    })
  }

  componentDidMount() {
    this.props.foxFromDBtoFav();
  }



  render() {
    (this.props.foxMemes && this.props.foxMemes.length > 0 && console.log(this.props.foxMemes[0]._id));
    let foxCards = this.props.foxMemes.map(i => {
      return <FoxCard
        memeURL={i.memeURL}
        imgUrl={i.imgUrl}
        key={i._id}
        id={i._id}
        alt={i.userInput}
        v={i.__v}
        text={i.userInput}
        showModal={this.showModal}
        openModal={this.openModal}
      />


     
    }
    );
    return (
      <>
        <div className='favCard'>{foxCards}</div>
        <FoxModal
          openModal={this.openModal}
          closeModal={this.closeModal}
          deleteFoxMeme={this.props.deleteFoxMeme}
          updateFoxMeme={this.props.updateFoxMeme}
          showModal={this.state.showModal}
          text={this.state.text}
          id={this.state.id}
          v={this.state.v}
          imgUrl={this.state.imgUrl}
          memeURL={this.state.memeURL}
        />
      </>
    )
  }
}

export default withAuth0(Favorites);