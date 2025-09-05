import React from 'react'
import './NavbarCss.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import ball from '../../Images/ftball.png'
function NavBarComp() {
  return (
     <Navbar>
      <Container>
        <Navbar.Brand href="/" className='Logo'>
            <img src={ball} alt='football' className='ball'/>
            <h1 className='title m-auto'>DefiKoura</h1>
             </Navbar.Brand>
        <Navbar.Toggle />
      </Container>
    </Navbar>
  )
}

export default NavBarComp