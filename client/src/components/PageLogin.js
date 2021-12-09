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
              <p>
                Don't have an account? &nbsp;
                <Button variant="secondary" onClick={() => setShowLogin(false)}>Sign Up</Button>
              </p>
            </>
          ) : (
            <>
              <Signup setCurrentUser={setCurrentUser} />
              <p id="p1">
                Already have an account? &nbsp;
                <Button variant="secondary" onClick={() => setShowLogin(true)}>
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
