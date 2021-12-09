import React, { useState } from "react";
import { Container, Row, Form, Col, Button, Alert} from "react-bootstrap";

function Signup ({setCurrentUser}){
   const [formData,setFormData]= useState({
       username: "",
       password: "",
   })

   const[error,setErrors]=useState([])

console.log("error", error)
const handleChange= (e)=> {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
}

const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/users",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    }).then((res)=>{
        if(res.ok){
            res.json().then((user)=>{
                console.log(user)
                setCurrentUser(user)
            });
        }else{
            res.json().then((errors)=>{
                setErrors(errors.errors)
            })
        }
    })
}
    

    return(
        <div id="signin">
        <h2 id="signupTitle">Sign Up</h2>
        <Form id="form1"  onSubmit={handleSubmit}>
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
  
          {error.map((err) => <Alert id="alert2" key={err}>{err}</Alert>)}

          <Button id="b4" variant="warning" type="submit">Submit</Button>
        </Form>
       </div>
    )
}

export default Signup