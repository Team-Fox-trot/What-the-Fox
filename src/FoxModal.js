import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

class FoxModal extends React.Component {
  render() {
    return (
      <Modal
        show={this.props.showModal} onHide={this.props.closeModal} size="lg"
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <img src='https://randomfox.ca/images/49.jpg' alt='alttext' />
          {/* <p>meme text</p> */}
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="text">
              <Form.Label>Update the meme text</Form.Label>
              <Form.Control type="text" placeholder="current meme text" />
            </Form.Group>
            <Button variant="outline-primary" type="submit">
                Update this meme
            </Button>
          </Form>

          <Button variant="outline-danger"
          // onClick={() => this.deleteFox(i._id)}
          >Delete this meme</Button>

        </Modal.Body>

      </Modal>
    )
  }
}

export default FoxModal;