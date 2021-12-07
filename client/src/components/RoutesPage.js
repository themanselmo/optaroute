import { useState } from "react"
import AddRouteForm from "./AddRouteForm"
import RouteCard from "./RouteCard"

const RoutesPage = () => {
    const [adding, setAdding] = useState(false)
    const [managing, setManaging] = useState(false)

    function handleAdding() {
        setAdding(!adding)
    }

    function handleManaging() {
        setManaging(!managing)
    }

    const mockRoutes = [
        {
            starting_point: "Home", 
            destination: "Work",
            distance: 50.5,
            date: "2021-12-6"
        },
        {
            starting_point: "Home", 
            destination: "Work",
            distance: 50.5,
            date: "2021-12-6"
        },
        {
            starting_point: "Home", 
            destination: "Work",
            distance: 50.5,
            date: "2021-12-6"
        },
        {
            starting_point: "Home", 
            destination: "Work",
            distance: 50.5,
            date: "2021-12-6"
        }
    ]

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
                {listRoutes(mockRoutes)}
            </div>
        </div>
    )

}

export default RoutesPage