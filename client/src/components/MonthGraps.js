import { useEffect, useState } from "react";

import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
function MonthGraps() {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    fetch("/myroutes")
      .then((res) => res.json())
      .then((routes) => {
        setRoutes(routes);
      });
  }, []);

  const monthssum = routes.map((item) => {
    return {
      month: item.date.split("-")[1],
      distance: item.distance,
    };
  });

  function lookup(monthname, newarray) {
    for (var i = 0, len = newarray.length; i < len; i++) {
      if (newarray[i].month === monthname) return true;
    }
    return false;
  }

  function distanceformonth(monthssum) {
    let sum1 = 0;
    let sum2 = 0;
    let sum3 = 0;
    let sum4 = 0;
    let sum5 = 0;
    let sum6 = 0;
    let sum7 = 0;
    let sum8 = 0;
    let sum9 = 0;
    let sum10 = 0;
    let sum11 = 0;
    let sum12 = 0;
    let newarray = [];
    let lastarray = [];
    for (let i = 0; i < monthssum.length; i++) {
      if (monthssum[i].month === "12") {
        sum12 = sum12 + monthssum[i].distance;
      }
      if (monthssum[i].month === "01") {
        sum1 = sum1 + monthssum[i].distance;
      }
      if (monthssum[i].month === "02") {
        sum2 = sum2 + monthssum[i].distance;
      }
      if (monthssum[i].month === "03") {
        sum3 = sum3 + monthssum[i].distance;
      }
      if (monthssum[i].month === "04") {
        sum4 = sum4 + monthssum[i].distance;
      }
      if (monthssum[i].month === "05") {
        sum5 = sum5 + monthssum[i].distance;
      }
      if (monthssum[i].month === "06") {
        sum6 = sum6 + monthssum[i].distance;
      }
      if (monthssum[i].month === "07") {
        sum7 = sum7 + monthssum[i].distance;
      }
      if (monthssum[i].month === "08") {
        sum8 = sum8 + monthssum[i].distance;
      }
      if (monthssum[i].month === "09") {
        sum9 = sum9 + monthssum[i].distance;
      }
      if (monthssum[i].month === "10") {
        sum10 = sum10 + monthssum[i].distance;
      }
      if (monthssum[i].month === "11") {
        sum11 = sum11 + monthssum[i].distance;
      }

      if (!lookup(monthssum[i].month, newarray)) {
        newarray.push({
          month: monthssum[i].month,
        });
      }
    }

    for (let key in newarray) {
      if (newarray[key].month === "01") {
        lastarray.push({
          month: "January",
          distance: sum1,
        });
      }
      if (newarray[key].month === "02") {
        lastarray.push({
          month: "February",
          distance: sum2,
        });
      }
      if (newarray[key].month === "03") {
        lastarray.push({
          month: "March",
          distance: sum3,
        });
      }

      if (newarray[key].month === "04") {
        lastarray.push({
          month: "April",
          distance: sum4,
        });
      }

      if (newarray[key].month === "05") {
        lastarray.push({
          month: "May",
          distance: sum5,
        });
      }
      if (newarray[key].month === "06") {
        lastarray.push({
          month: "June",
          distance: sum6,
        });
      }

      if (newarray[key].month === "07") {
        lastarray.push({
          month: "July",
          distance: sum7,
        });
      }
      if (newarray[key].month === "08") {
        lastarray.push({
          month: "August",
          distance: sum8,
        });
      }
      if (newarray[key].month === "09") {
        lastarray.push({
          month: "September",
          distance: sum9,
        });
      }
      if (newarray[key].month === "10") {
        lastarray.push({
          month: "October",
          distance: sum10,
        });
      }
      if (newarray[key].month === "11") {
        lastarray.push({
          month: "November",
          distance: sum11,
        });
      }
      if (newarray[key].month === "12") {
        lastarray.push({
          month: "December",
          distance: sum12,
        });
      }
    }

    return lastarray;
  }
  console.log("New Array", distanceformonth(monthssum));

  return (
    <div id="monthchart">
    <BarChart width={730} height={300} data={distanceformonth(monthssum)} >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis label={{ value: 'distance miles', angle: -90, position: 'insideLeft' }} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="distance" fill="#FAB954"/>
    </BarChart>
    </div>
  );
}

export default MonthGraps;
