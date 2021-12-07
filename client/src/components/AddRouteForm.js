import { useState } from "react"


const AddRouteForm = ({ handleAddRoute }) => {
    const [formData, setFormData] = useState({
        starting_point: "",
        destination: "",
        distance: "",
        date: ""
    })

    return (
        <div id="Add-Route-Form">
            <input placeholder="From"/>
            <input placeholder="Destination"/>
            <input placeholder="Distance"/>
            <input placeholder="Date yyyy-mm-dd"/>
            <button>Add</button>
        </div>
    )
}

export default AddRouteForm