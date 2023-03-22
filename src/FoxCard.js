import React from 'react';
import Card from 'react-bootstrap/Card';


class FoxCard extends React.Component {
  render() {
    return (
      <Card>
        <Card.Img onClick={() => this.props.openModal(this.props.id, this.props.text, this.props.imgURL, this.props.v)} variant="top" src={this.props.imgURL} alt={this.props.alt} />
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