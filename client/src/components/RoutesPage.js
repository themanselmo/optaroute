import RouteCard from "./RouteCard"

const RoutesPage = () => {
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
        return routes.map(route => <RouteCard route={route}></RouteCard>)
    }

    return (
        <div id="Routes-Page">
            <button>Add Route</button>
            <button>Manage Routes</button>

            <h3>Routes:</h3>
            <div id="Routes-List">
                {listRoutes(mockRoutes)}
            </div>
        </div>
    )

}

export default RoutesPage