import React from 'react';
import Card from 'react-bootstrap/Card';


class FoxCard extends React.Component {
  render() {
    return (
      <Card>
        <Card.Img onClick={() => this.props.openModal(this.props.key, this.props.text, this.props.imgURL)} variant="top" src={this.props.imgURL} alt={this.props.alt} />
        <Card.Body>
          <Card.Text>
          {this.props.text}
          </Card.Text>
        </Card.Body>
        {/* <Modal /> */}
      </Card>
    )
  }
}

export default FoxCard;