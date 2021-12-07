import { useState } from "react"

const RouteCard = ({ route, managing }) => {
    const [edit, setEdit] = useState(false)

    function handleEdit() {
        setEdit(!edit)
    }

    function handleEditSubmit() {
        setEdit(!edit)
        console.log("fetch update")
    }

    const Card = () => {
        return (
            <>
                <p>From: {route.starting_point}</p>
                <p>Destination: {route.destination}</p>
                <p>Distance: {route.distance}</p>
                <p>Date: {route.date}</p>
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
                <form className="Edit-Card">
                    <input defaultValue={route.starting_point}/>
                    <input />
                    <input />
                    <input />
                    <button onClick={handleEditSubmit}>Submit Edit</button>
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