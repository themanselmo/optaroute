import { useState, useEffect } from "react"
import AddRouteForm from "./AddRouteForm"
import RouteCard from "./RouteCard"

const RoutesPage = () => {
    const [adding, setAdding] = useState(false)
    const [managing, setManaging] = useState(false)
    const [userRoutes, setUserRoutes] = useState([])

    function handleAdding() {
        setAdding(!adding)
    }

    function handleManaging() {
        setManaging(!managing)
    }
    
    useEffect(() => {
        fetch("/myroutes")
        .then(res=>res.json())
        .then(routes=>{
            setUserRoutes(routes)
        })    
    }, []);
    
    const handleDelete = (itemToDelete) => {
        const routesToRender = userRoutes.filter((item)=>item.id !== itemToDelete.id)
        setUserRoutes(routesToRender)
    }

    const addRoute = (newRoute)=>{
        setUserRoutes([...userRoutes, newRoute])

    }

    const listRoutes = (routes) => {
        return routes.map(route => <RouteCard handleDelete={handleDelete} route={route} managing={managing}></RouteCard>)
    }

  

 

    return (
        <div id="Routes-Page">
            <button onClick={handleAdding}>{adding ? "Close" : "Add Route"}</button>
            <button onClick={handleManaging}>{managing? "Stop Managing" : "Manage Route"}</button>
            {adding ? <AddRouteForm addRoute={addRoute} /> : null}
            <h3>Routes:</h3>
            <div id="Routes-List">
                {listRoutes(userRoutes)}
            </div>
        </div>
    )

}

export default RoutesPage