import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import "./headerStyle.css";

const Header = () => {
  return (
    <header>
      <Jumbotron className="header-background">
        <Container className="text-center">
          <h1>Employee Tracker</h1>
        </Container>
      </Jumbotron>
    </header>
  );
};

export default Header;