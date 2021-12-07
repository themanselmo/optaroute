import { useState } from "react"

const RouteCard = ({ route, managing }) => {
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

    function handleEditSubmit(e) {
        setEdit(!edit)
        console.log("fetch update with updatedRoute")
        console.log(e)

        const updatedRoute = {
            starting_point: e.target[0].value,
            destination: e.target[1].value,
            distance: e.target[2].value,
            date: e.target[3].value
        }

        setFormData(updatedRoute)
        console.log(updatedRoute)

    }

    const Card = () => {
        return (
            <>
                <p>From: {formData.starting_point}</p>
                <p>Destination: {formData.destination}</p>
                <p>Distance: {formData.distance}</p>
                <p>Date: {formData.date}</p>
                {
                    managing ? 
                        <>
                            <button onClick={handleEdit}>Edit Route</button>
                            <button>Delete Route</button>
                        </>
                        :
                        null
                }
                
            </>
        )
    }

    const EditCard = () => {
        return (
            <>
                <form onSubmit={handleEditSubmit} className="Edit-Card">
                    <input defaultValue={route.starting_point}/>
                    <input defaultValue={route.destination}/>
                    <input defaultValue={route.distance}/>
                    <input defaultValue={route.date}/>
                    <button>Submit Edit</button>
                </form>
            </>
        )
    }

    return (
        <div className="Route-Card">
            {
                edit ? 
                    <EditCard /> 
                    :
                    <Card />
            }
            
        </div>
    )
}

export default RouteCard