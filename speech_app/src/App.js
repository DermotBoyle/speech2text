import React, { Component } from 'react';
import './App.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Jumbotron, Container } from 'reactstrap';
import { FaMousePointer  } from "react-icons/fa";
import { MDBInput } from "mdbreact";
import Button from "./button";
import Voice from './button2';
import Quotes from './button3';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
      collapsed: true,
      text : ""
      
    };
  }

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  handleChange = (event) => {
    console.log(event);
    this.setState({value: event.target.value});
  }

  render() {
  const encodedtext = "La%20pela%20es%20la%20pela";
  const key = "c72b3784423941dc9c71739cbbc51d41";
  const url = `http://api.voicerss.org/?key=${key}&hl=ca-es&src=${encodedtext}`;

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
    <audio id="audio">
      <source id="mp3Source" src= {url} type="audio/mp3"></source>
        Your browser does not support the audio format.
    </audio>

    <div className="flexbox-container float-center"> <MDBInput
          onChange={this.handleChange}
          type="textarea"
          label="Text here to write"
          rows="2"
          icon="pencil-alt"/>
         
        </div> 
        <button type="button" class="btn btn-default" aria-label="Left Align">
        <span class="glyphicon glyphicon-align-left" aria-hidden="true"></span>
        </button>

   </div>
      
    );
  }
}

export default App;
