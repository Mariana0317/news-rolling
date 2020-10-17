import React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Header from './Header';
import HeaderAdm from './HeaderAdm';


const JumboHeader = () => {
    return (
        <div >
            <Jumbotron claasName="fluid my-auto">
        <Container >
        <Header></Header>
          <h1 className=" text-center mt-5">Rolling News</h1>
          <p></p>
          
        </Container>
      </Jumbotron>
      <HeaderAdm></HeaderAdm>
        </div>
    );
};

export default JumboHeader;