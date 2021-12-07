import { useEffect, useState } from "react"
import { BarChart,CartesianGrid,XAxis,YAxis,Tooltip, Legend,Bar} from 'recharts';


function DaysGraphs(){

    const[routes,setRoutes]=useState([])
    
    // console.log(routes)

    useEffect(() => {
        fetch("/routes")
        .then(res=>res.json())
        .then(routes=>{
            setRoutes(routes)
        })    
      }, []);

   
    
    const dates=routes.map(item => {
        return {
          name: item.date,
          distance: item.distance
        };
      });
    console.log(dates)

    return(
        <BarChart width={730} height={250} data={dates}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="distance" fill="#8884d8" />
         </BarChart>
    )
}

export default DaysGraphs