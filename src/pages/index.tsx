import React, { useEffect, useState } from 'react'
import { graphql, Link, navigate } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Row, Col } from 'react-bootstrap'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import "./main.css"


export default () => {


  return (
    <div>
      <Header />
      <h1 className="main-text">Blog aplikacja</h1>

    </div >

  );
}

