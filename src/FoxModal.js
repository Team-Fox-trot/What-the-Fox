import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
class FoxModal extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    let updateFox = {
      userInput: e.target.text.value || this.props.text,
      imgUrl: this.props.imgUrl,
      memeURL: this.props.memeURL,
      _id: this.props.id,
      __v: this.props.v
    }
    console.log(updateFox);
    this.props.updateFoxMeme(updateFox);
    this.props.closeModal();
  }


  render() {
    return (
      <Modal
        show={this.props.showModal} onHide={this.props.closeModal} size="lg"
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <img src={this.props.memeURL} alt='alttext' />
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="text">
              <Form.Label>What does the Fox want to say now?</Form.Label>
              <Form.Control type="text" placeholder={this.props.text} />
            </Form.Group>
            <Button variant="outline-primary" type="submit">
                Update me
            </Button>
          </Form>

          <Button variant="outline-danger"
          onClick={() => {
            this.props.deleteFoxMeme(this.props.id);
            this.props.closeModal();
          }}
          >Delete this cute Fox :(</Button>

        </Modal.Body>

      </Modal>
    )
  }
}

export default FoxModal;