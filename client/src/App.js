
import './App.css';
import Header from './components/Header';
import { useState, useEffect } from "react";
import PageLogin from "./components/PageLogin";
import GraphPage from "./components/GraphPage";
import { Routes, Route } from 'react-router-dom';
import RoutesPage from './components/RoutesPage';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [userRoutes, setUserRoutes] = useState([])

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          console.log("After we login", user);
          setCurrentUser(user);
          getRoutes()
        });
      }
      else {
        console.log("User is null")
        setCurrentUser(null)
      }
    });
  }, []);

  const getRoutes = () => {
    fetch("/myroutes")
    .then(r => r.json())
    .then(data => console.log(data))
  }

  if (!currentUser) return <PageLogin setCurrentUser={setCurrentUser} />;

  // console.log(userRoutes)
  return (
    <div className="App">
      <Header setCurrentUser={setCurrentUser}/>
      <Routes>
        <Route path="/" element={<GraphPage />} />
        <Route path="/Home" element={<GraphPage />} />
        <Route path="/Routes" element={<RoutesPage />}/>
      </Routes>
    </div>
  );
}

export default App;
