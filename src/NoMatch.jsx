import React from 'react';
import {
  useLocation
} from "react-router-dom";
import { Container } from 'react-bootstrap';

function NoMatch() {
  let location = useLocation();

  return (
    <Container fluid>
      <h1>404</h1>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </Container>
  );
}

export default NoMatch;