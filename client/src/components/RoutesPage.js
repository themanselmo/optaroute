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
    

    const listRoutes = (routes) => {
        return routes.map(route => <RouteCard route={route} managing={managing}></RouteCard>)
    }

    return (
        <div id="Routes-Page">
            <button onClick={handleAdding}>{adding ? "Close" : "Add Route"}</button>
            <button onClick={handleManaging}>{managing? "Stop Managing" : "Manage Route"}</button>
            {adding ? <AddRouteForm /> : null}
            <h3>Routes:</h3>
            <div id="Routes-List">
                {listRoutes(userRoutes)}
            </div>
        </div>
    )

}

export default RoutesPage