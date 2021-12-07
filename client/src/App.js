import { useState, useEffect } from "react";
import "./App.css";
import PageLogin from "./PageLogin";
import DaysGraphs from "./DaysGraphs";
import MonthGraps from "./MonthGraps";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          console.log("After we login", user);
          setCurrentUser(user);
        });
      }
    });
  }, []);

  if (!currentUser) return <PageLogin setCurrentUser={setCurrentUser} />;

  return (
    <div>
      <DaysGraphs />
      <MonthGraps />
    </div>
  );
}

export default App;
