import React from 'react';
import Card from 'react-bootstrap/Card';


class FoxCard extends React.Component {
  render() {
    return (
      <Card>
        <Card.Img onClick={this.props.openModal} variant="top" src={this.props.image_url} alt={this.props.alt} />
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