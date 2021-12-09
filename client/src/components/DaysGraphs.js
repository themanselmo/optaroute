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
      <LineChart width={730} height={300} data={routes}
      margin={{ top: 0, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis label={{ value: 'distance miles', angle: -90, position: 'insideLeft' }} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line strokeWidth={3} type="monotone" dataKey="distance" stroke="#FAB954"/>
      </LineChart>
      </div>
  
    )
}

export default DaysGraphs