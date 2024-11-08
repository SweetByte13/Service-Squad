import React, { useEffect, useState, createContext, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";
import Opportunities from "../pages/Opportunities";
import Opportunity from "../pages/Opportunity";
import Organizations from "../pages/Organizations"
import { AppContext } from "../context/Context";


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    { console.log("before")
      fetch("/api/check_session")
        .then((resp) => {
          if (resp.ok) {
             return resp.json()
          }
        }).then((user) => {
          console.log(user)
          setUser(user)
        });
    }
  }, []);

return (
  <>
    <AppContext.Provider
      value={{user, setUser}}
    >
      <>
        <Routes>
          <Route path="/" element={<Home user={user} setUser={setUser} />} />
          <Route path="/login" element={<Login setUser={setUser} user={user}/>} />
          <Route path="/profile" element={<Profile user={user} setUser={setUser} />} />
          <Route path="/opportunities" element={<Opportunities setUser={setUser} user={user} />}/>
          <Route path="/opportunities/:id" element={<Opportunity setUser={setUser} user={user} />}/>
          <Route path="/organizations" element={<Organizations setUser={setUser} user={user} />} />
          <Route path="/signup" element={<SignUp setUser={setUser} user={user}/>} />
        </Routes>
      </>
    </AppContext.Provider>
  </>
);
}

export default App;