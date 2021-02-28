import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Row, Col } from 'react-bootstrap'
import Header from '../components/Header'
import Damcyk from '../images/profilowe.png'

import "./main.css"


export default () => {
  return (
    <div>
      <Header />
      <Container fluid>
        <Row>
        <div className="w3-card w3-margin w3-margin-top">
                <img src={Damcyk} />
                <div className="w3-container w3-white">
                    <h4><b>Damian</b></h4>
                    <p>Lorem ipsum lorem ipsum</p>

                   

                </div>
            </div><hr />
        </Row>

      </Container>

    </div >

  );
}

