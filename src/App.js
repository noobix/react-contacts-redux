import React from 'react';
import './App.css';
import Form from './components/ContactForm'
import Contacts from './components/Contacts'
import {Container, Row, Col} from 'react-bootstrap'

class App extends React.Component{
  constructor(){
    super();
    this.state = {contacts:[]};
  }

  render() {
    return <>
    <Container>
      <Row>
        <Col md={4}><Form /></Col>
        <Col md={8}><Contacts /></Col>
      </Row>
    </Container>
      
      
    </>
  }
}
export default App;