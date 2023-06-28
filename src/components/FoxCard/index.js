import React from 'react';
import Card from 'react-bootstrap/Card';


class FoxCard extends React.Component {
  render() {
    return (
      <Card>
        <Card.Img onClick={() => this.props.openModal(this.props.id, this.props.text, this.props.imgUrl, this.props.v, this.props.memeURL)} variant="top" src={this.props.memeURL} alt={this.props.alt} />
        <Card.Body>
          <Card.Text>
          {this.props.text}
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default FoxCard;