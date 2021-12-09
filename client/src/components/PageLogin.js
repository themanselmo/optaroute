import { useState, useEffect } from "react";
import Login from "./Login";
import Signup from "./Signup";
import { Container, Row, Col, Button } from "react-bootstrap";

function PageLogin({ setCurrentUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <Container >
      <Row className="justify-content-md-center">
        <Col xs={6}>
          <h1 id="title">OPTAROUTE</h1>
          
          {showLogin ? (
            <>
              <Login setCurrentUser={setCurrentUser} />
              <p id="p1">
                Don't have an account? &nbsp;
                <Button  id="b1" variant="warning" onClick={() => setShowLogin(false)}>Sign Up</Button>
              </p>
            </>
          ) : (
            <>
              <Signup setCurrentUser={setCurrentUser} />
              <p id="p2">
                Already have an account? &nbsp;
                <Button id="b2" variant="warning" onClick={() => setShowLogin(true)}>
                  Log In
                </Button>
              </p>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default PageLogin;
