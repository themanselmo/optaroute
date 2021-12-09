import { useEffect, useState } from "react"

import {LineChart, CartesianGrid, XAxis,YAxis,Tooltip, Legend, Line} from 'recharts';

function DaysGraphs(){

    const[routes,setRoutes]=useState([])
    
    // console.log(routes)

    useEffect(() => {
        fetch("/myroutes")
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
    console.log("Day graph",dates)

    return(
      <div id="dayChart">
      <LineChart width={730} height={250} data={routes}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis label={{ value: 'distance km', angle: -90, position: 'insideLeft' }} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="distance" stroke="#000000" />
      </LineChart>
      </div>
  
    )
}

export default DaysGraphs