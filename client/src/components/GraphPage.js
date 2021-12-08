import DaysGraphs from "./DaysGraphs";
import MonthGraps from "./MonthGraps";

const GraphPage = () => {

    return (
        <div>
            <h4>Daily Mileage</h4>
            <DaysGraphs />
            <h4>Monthly Mileage</h4>
            <MonthGraps />
        </div>
    )
}

export default GraphPage