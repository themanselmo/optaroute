import { useState } from "react"
import {Button} from "react-bootstrap"
import Paper from "@mui/material/Paper";

const RouteCard = ({ route, managing , handleDelete, handleUpdateRoute}) => {
    const [edit, setEdit] = useState(false)
    const [formData, setFormData] = useState({
        starting_point: route.starting_point,
        destination: route.destination,
        distance: route.distance,
        date: route.date
    })

    function handleEdit() {
        setEdit(!edit)
    }

    function handleFormChange(e) {
        const name = e.target.name;
		const value = e.target.value;
		setFormData({ ...formData, [name]: value });
    }

    function handleEditSubmit(e) {
        setEdit(!edit)
        console.log("fetch update with updatedRoute")
        console.log(e)

        const updatedRoute = {
            starting_point: formData.starting_point,
            destination: formData.destination,
            distance: parseFloat(formData.distance),
            date: formData.date
        }

        setFormData(updatedRoute)
        console.log(updatedRoute)
        handleUpdateRoute(updatedRoute, route.id)

    }
    
    
    const handleDeleteCard = (route) =>{
        fetch(`/routes/${route.id}`,{
        method: "DELETE"
      }) 
        .then((r) => r.json())
        .then(handleDelete(route)) 
   
    }


    return (
        
        <Paper 
            id="card"
            className="Route-Card"
            elevation={12}
            sx={{
                maxWidth: '400px',
                minWidth: '400px',
                maxHeight: '325px',
                minHeight: '230px',
                margin: '20px',
			}}
        >
        {
            edit ? 
                // <EditCard /> 
                <>
                    <form onSubmit={handleEditSubmit} className="Edit-Card">
                        <input type="text" name="starting_point" onChange={handleFormChange} value={formData.starting_point}/>
                        <input type="text" name="destination" onChange={handleFormChange} value={formData.destination}/>
                        <input type="text" name="distance" onChange={handleFormChange} value={formData.distance}/>
                        <input type="text" name="date" onChange={handleFormChange} value={formData.date}/>
                        <Button className="card-button" variant="secondary" type="submit">Submit Edit</Button>
                    </form>
                </>
                :
                // <Card />
                <>
                    <p>From: {formData.starting_point}</p>
                    <p>Destination: {formData.destination}</p>
                    <p>Distance: {formData.distance} miles</p>
                    <p>Date: {formData.date}</p>
                    {
                        managing ? 
                            <>
                                <Button className="card-button" variant="secondary" onClick={handleEdit}>Edit Route</Button>
                                <Button className="card-button" variant="secondary" onClick={()=>handleDeleteCard(route)}>Delete Route</Button>
                            </>
                            :
                            null
                    }
                    
                </>
        }
        </Paper>
       
    )
}

export default RouteCard