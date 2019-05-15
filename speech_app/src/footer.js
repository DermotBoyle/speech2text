import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { FaHeart } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faGithub,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

const FooterPage = () => {
  return (
    <MDBFooter color="blue-grey lighten-3" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">This is a test</h5>
            <p>We made this challenge to see if it works and it did!</p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Follow us</h5>
            <ul>
              <li className="list-unstyled">
                <a href="https://www.youtube.com/" className="youtube social">
                  <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.github.com/" className="youtube social">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.twitter.com/" className="youtube social">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.MDBootstrap.com">
            {" "}
            Made with <FaHeart /> by Brenda & Dermot{" "}
          </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
