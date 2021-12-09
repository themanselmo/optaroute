import { useState } from "react"
import { Container, Row, Form, Col, Button, Alert} from "react-bootstrap";

const AddRouteForm = ({ addRoute }) => {
    const [formData, setFormData] = useState({
        starting_point: "",
        destination: "",
        distance: "",
        date: ""
    })
    
    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) =>{
          console.log('submitting ')
          e.preventDefault();
          fetch("/routes",{
              method: "POST",
              headers:{
                "Content-Type": "application/json",
              },
              body:JSON.stringify(formData)
          }).then((res)=>{
              if(res.ok){
                  res.json().then((routes)=>{
                    addRoute(routes)
                  })
              }else{
                res.json().then((errors) => {
                  console.error(errors.error)
                });
            }
          });
        };

    return (
        <div id="Add-Route-Form">
            <Container> 
            <Row className="justify-content-md-center">
            <Col xs={6}>
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
            <Form.Label>Starting Point</Form.Label>
            <Form.Control
            id="starting_point"
            name="starting_point"
            value={formData.starting_point}
            onChange={handleChange}
            placeholder="From"/>
            </Form.Group>
             
            <Form.Group className="mb-3">
            <Form.Label>Destination</Form.Label>
            <Form.Control 
             id="destination"
             name="destination"
             value={formData.destination}
             onChange={handleChange}
             placeholder="Destination"/>
             </Form.Group>

             <Form.Group className="mb-3">
            <Form.Label>Distance</Form.Label>
            <Form.Control
             id="distance"
             name="distance"
             value={formData.distance}
             onChange= {handleChange}
            placeholder="Distance"/>
            </Form.Group>

            <Form.Group className="mb-3">
            <Form.Label>Date</Form.Label>
            <Form.Control 
             id="date"
             name="date"
             value={formData.date}
             onChange= {handleChange}
            placeholder="Date yyyy-mm-dd"/>
            </Form.Group>

            <Button onClick={handleSubmit}variant="outline-secondary">Add</Button>
            </Form>
            </Col>
            </Row>
           </Container>
        </div>
    )
}

export default AddRouteForm