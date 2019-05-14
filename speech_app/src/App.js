import React, { Component } from "react";
import "./App.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Jumbotron,
  Container
} from "reactstrap";
import { FaMousePointer, FaPlay, FaPause } from "react-icons/fa";
import { MDBInput } from "mdbreact";
import Button from "./Button";
import Quotes from "./button3";
import FooterPage from "./footer";
import Dermot from "./qs.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
      text: "",
      language: ""
    };
  }

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  handleChange = event => {
    // función dentro del text area
    console.log(event);
    const value = event.target.value;
    this.setState({ text: encodeURIComponent(value) });
  };

  onPlaying = () => {
    console.log("playing..."); //
    var audio = document.getElementById("audio");
    audio.load(); //call this to just preload the audio without playing
    audio.play(); //call this to play the song right away
    //this.setState({value: event.target.value});
  };

  onPause = () => {
    console.log("pause");
    var audio = document.getElementById("audio");
    audio.pause();
  };

  onlanguage = event => {
    // función dentro del text area
    console.log(event);
    const value = event.target.value;
    this.setState({ language: value });
  };

  changeLang = language => {
    console.log(language, this);
    // this.setState()
    this.setState({ language: language });
  };

  // la función que está debajo del comentario tiene un api del link que me enviaste

  /* randomQuote = () => {
    fetch("https://favqs.com/api/")
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.setState({
          text: quote
        });
      });
  };*/

  render() {
    const key = "c72b3784423941dc9c71739cbbc51d41";
    const url = `http://api.voicerss.org/?key=${key}&hl=${
      this.state.language
    }&src=${this.state.text}`;
    console.log(url);
    return (
      <div className="App">
        <Navbar color="Faded" light>
          <NavbarBrand href="/" className="Title">
            ii
          </NavbarBrand>
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
              <p className="lead">
                An application to synthesize your text to speech in a click
                <FaMousePointer />
              </p>
            </Container>
          </Jumbotron>
        </div>

        <Quotes selectQuote={() => this.randomQuote()} />
        <Dermot />

        <Button changeLang={this.changeLang} />

        <audio id="audio">
          <source id="mp3Source" src={url} type="audio/mp3" />
          Your browser does not support the audio format.
        </audio>

        <div className="flexbox-container float-center">
          {" "}
          <MDBInput
            onChange={this.handleChange}
            type="textarea"
            label="write here..."
            rows="5"
            icon="pencil-alt"
          />
        </div>
        <button onClick={this.onPlaying}>
          <FaPlay />
        </button>
        <button onClick={this.onPause}>
          <FaPause />
        </button>
        <FooterPage />
      </div>
    );
  }
}

export default App;
