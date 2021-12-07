import { useEffect, useState } from "react"

function MonthGraps(){

    const[routes,setRoutes]=useState([])
    console.log("In manth",routes)
    // console.log(routes)

    useEffect(() => {
        fetch("/routes")
        .then(res=>res.json())
        .then(routes=>{
            setRoutes(routes)
        })    
      }, []);

      const monthssum=routes.map((item)=>{
          return {
                    month: item.date.split("-")[1],
                    distance: item.distance
                }
      })

      function lookup( monthname, newarray) {
        for(var i = 0, len = newarray.length; i < len; i++) {
            if( newarray[ i ].month === monthname )
                return true;
        }
        return false;
    }
       
      function distanceformonth(monthssum){
          let sum=0
          let newarray=[]
        for(let i=0; i<monthssum.length; i++){

            if(!lookup(monthssum[i].month, newarray)) {
                newarray.push({
                    month: monthssum[i].month
                })
            }


            // if(newarray.filter((item)=>{
            //     console.log(item.monthnum, monthssum[i].month)
            //       return item.monthnum===monthssum[i].month
                 
            // })===[]) {} else 
            // { newarray.push({
            //     monthnum: "12",
            //     month: "December",
            //     distance: sum+=monthssum[i].distance
            // })}

            // if( monthssum[i].month==="12" && !lookup( "December", newarray ) ) {
            //     newarray.push({
            //         month: "December",
            //          distance:monthssum[i].distance
            //     });
            // }
            
           
            //  if(monthssum[i].month==="12" && newarray[i]!=="December"){
            //       newarray.push({
            //           month: "December",
            //           distance: sum+=monthssum[i].distance
            //       })
            // }
        }
        return newarray
      }
      console.log(distanceformonth(monthssum))

 

return (
    <div>Stela</div>
)
}

export default MonthGraps