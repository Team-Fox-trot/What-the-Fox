import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Login from './Login';
// import Logout from './Logout';

class Header extends React.Component {
  render() {
    return (
      // <>
      <Navbar bg="" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="color-nav">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/favorites">Favorites</Nav.Link>
            <Nav.Link href="/aboutus">About Us</Nav.Link>
            <Nav.Link href="#login">Login</Nav.Link>
          
          </Nav>
        </Container>
      </Navbar>
      /* <Login />
      <Logout /> */
      // </>
    )
  }
}

export default Header;