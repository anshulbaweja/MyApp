

import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';

import Toast from 'react-bootstrap/Toast';

import Container from 'react-bootstrap/Container';

import Button from 'react-bootstrap/Button';
import Navigation from './Components/Navigation.js';
// import SideNavPage from './SideNavPage.js';
// import TableData from './Components/TableData';
import TableSearch from './Components/TableWithSearch';

import Footer from './Components/Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './App.scss';



{/* <link 
rel="stylesheet"
href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
crossorigin="anonymous"
/> */}

const ExampleToast = ({ children }) => {

  const [show, toggleShow] = useState(true);
 
  return (

    <div>

      {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}

      <Toast show={show} onClose={() => toggleShow(false)}>

        <Toast.Header>

          <strong className="mr-auto">React-Bootstrap</strong>

        </Toast.Header>

        <Toast.Body>{children}</Toast.Body>

      </Toast>
  </div>

  );

};

 

const App = () => (

  <Container className="p-3">

    <Jumbotron>

      <h1 className="header">Welcome To React-Bootstrap</h1>

      {/* <ExampleToast className="toast">

        We now have Toasts

        <span role="img" aria-label="tada">

          🎉

        </span>

      </ExampleToast> */}

  
<Navigation/>
</Jumbotron>
{/* <SideNavPage/> */}
{/* <TableData/> */}
<TableSearch/>
<Footer/>

  </Container>

);

 

export default App;

 



