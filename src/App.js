import React from 'react';
import Header from "./shared/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Settings from "./components/Settings";
import Signup from "./components/Signup";
import Todolist from "./components/Todolist";


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Login />
      <Settings />
      <Signup />
      <Todolist /> 
    </div>
  );
}

export default App;
