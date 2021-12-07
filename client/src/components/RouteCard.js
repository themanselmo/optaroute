
const RouteCard = ({ route }) => {

    return (
        <div className="Route-Card">
            <p>From: {route.starting_point}</p>
            <p>Destination: {route.destination}</p>
            <p>Distance: {route.distance}</p>
            <p>Date: {route.date}</p>
        </div>
    )
}

export default RouteCard