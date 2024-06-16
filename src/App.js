import React, {useState} from 'react';
import { Route, Routes } from "react-router-dom";
import Header from "./shared/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Settings from "./components/Settings";
import Signup from "./components/Signup";
import Todolist from "./components/Todolist";
import "./styles/MediaQueries.css";



function App() {
  const [user, setUser] = useState({});

  return (
    <div className="App">
      <Header user={user} setUser={setUser} />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login user={user} setUser={setUser} />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/signup" element={<Signup user={user} setUser={setUser} />} />
      <Route path="/todolist" element={<Todolist />} />
      </Routes> 
    </div>
  );
}

export default App;
