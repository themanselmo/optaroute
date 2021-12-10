import { useState, useEffect } from "react"
import AddRouteForm from "./AddRouteForm"
import RouteCard from "./RouteCard"
import { Button} from "react-bootstrap";

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

    function handleUpdateRoute(updatedRoute, routeID) {
        console.log("Updating route with: ", updatedRoute)
        fetch(`/routes/${routeID}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedRoute)
        })
        .then(r => r.json())
        .then(data => console.log("returned route: ", data))

        
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
        return routes.map(route => 
            <RouteCard 
                key={route.id}
                route={route} 
                managing={managing}
                handleUpdateRoute={handleUpdateRoute}
                handleDelete={handleDelete}
            ></RouteCard>)
    }

  

 

    return (
        <div id="Routes-Page">
            <div id="routes-buttons">
            <Button id="b1" variant="warning"  size="lg" onClick={handleAdding}>{adding ? "Close" : "Add Route"}</Button>
            <Button id="b2" variant="warning" size="lg" onClick={handleManaging}>{managing? "Stop Managing" : "Manage Route"}</Button>
            </div>
            {adding ? <AddRouteForm addRoute={addRoute} /> : null}
            {/* <h3 id="routes1">Routes</h3> */}
            
            <div id="Routes-List">
                {listRoutes(userRoutes)}
            </div>
        </div>
    )

}

export default RoutesPage