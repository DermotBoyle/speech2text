import React, { Component } from 'react';
import './App.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Jumbotron, Container } from 'reactstrap';
import  { FaMousePointer  } from "react-icons/fa";
import { MDBInput } from "mdbreact";
import Button from "./button";
import Voice from './button2';
import Quotes from './button3';


class App extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <div className="App">
         <Navbar color="Faded" light>
          <NavbarBrand href="/" className='Title'>ii</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="Mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="//">Instructions</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

      <div className="Input">
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Limbiio</h1>
          <p className="lead">An application to synthesize your text to speech in a click<FaMousePointer/></p>
        </Container>
      </Jumbotron>
    </div>
    <Button />
    <Voice />
    <Quotes />

    <div className="flexbox-container float-center"> <MDBInput
          type="textarea"
          label="Text here to write"
          rows="2"
          icon="pencil-alt"/>
         
        </div> 
   
   </div>
      
    );
  }
}

export default App;
