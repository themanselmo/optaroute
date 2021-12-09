import { useState } from "react";
import { Container, Row, Form, Col, Button, Alert } from "react-bootstrap";

function Login({ setCurrentUser }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setErrors] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          console.log(user);
          setCurrentUser(user);
        });
      } else {
        res.json().then((errors) => {
          console.log(errors);
          setErrors(errors.errors);
        });
      }
    });
  };

  return (
    <div id="login">
          <h2 id="loginTitle">Log In</h2>
          <Form onSubmit={handleSubmit} id="form">
            <Form.Group >
              <Form.Label>Username:</Form.Label>
              <Form.Control
                id="username-input"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group >
              <Form.Label>Password:</Form.Label>

              <Form.Control
                id="password-input"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </Form.Group>

            {error.map((err) => <Alert key={err} id="alert1">{err}</Alert>)}
            <Button id="b3" variant="warning" type="submit">Submit</Button>
          </Form>
      </div>
  );
}

export default Login;
