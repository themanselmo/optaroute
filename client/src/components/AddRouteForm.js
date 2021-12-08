import { useState } from "react"


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
            <form onSubmit={handleSubmit}>
            <label>Starting Point</label>
            <input 
            id="starting_point"
            name="starting_point"
            value={formData.starting_point}
            onChange={handleChange}
            placeholder="From"/>

            <label>Destination</label>
            <input 
             id="destination"
             name="destination"
             value={formData.destination}
             onChange={handleChange}
             placeholder="Destination"/>

            <label>Distance</label>
            <input
             id="distance"
             name="distance"
             value={formData.distance}
             onChange= {handleChange}
            placeholder="Distance"/>

            <label>Date</label>
            <input 
             id="date"
             name="date"
             value={formData.date}
             onChange= {handleChange}
            placeholder="Date yyyy-mm-dd"/>
            <button>Add</button>
            </form>
        </div>
    )
}

export default AddRouteForm