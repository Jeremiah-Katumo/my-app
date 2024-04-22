import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import myImg from '../../Assets/img/avatar.svg';
import Tilt from 'react-parallax-tilt';

function Home2() {
  return (
    <>
    <Container fluid className='home-about-section'>
      <Container>
        <Row>
          <Col md={8} className='home-about-desc'>
            <h1 style={{ fontSize: "2.6em"}} >
              LET ME <span className='#0563bb'>INTRODUCE </span>MYSELF
            </h1>
            <p className='home-about-content'>
              I fell in ❤ with tech and since then I'm proud to think that 
              earned something in programming... 🤷‍♂️🤷‍♂️ <br />
              <br />
              I am proficent in the following languages: <i><b className='#0563bb'>R, Python, Javascript, Go and Mototko</b></i> <br />
              <br />
              My interest's rely in building new &nbsp;
              <i>
                <b className="purple">ML and Web Technologies Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Blockchain.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, my passion for coding relies on
              <b className="purple">Node.js, Python, Golang, R, MongoDB, MySQL</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js, Express.js, FastAPI, Flask, Shiny</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
    </>
  );
}

export default Home2