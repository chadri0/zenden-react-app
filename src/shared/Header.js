import React from 'react';
import "../styles/Header.css";
import { useNavigate, Link} from "react-router-dom";

const Header = ({user, setUser}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    fetch(`http://localhost:4000/logout`)
    .then((response) => response.json())
    .then((result) => {
      console.log("result :>>", result);
      localStorage.removeItem("user");
      setUser({});
      navigate("/");
    })
    .catch((error) => {
      console.log("error :>>", error);
      navigate("/signup")
    });
  };
  
    return (
      <div>
        <header>
          <nav>
              <ul className="navbar-list">
                  <li>
                    <Link to="/">home</Link>
                  </li>
                  <li>
                    <Link to="/todolist">to do list</Link>
                  </li>
                  <li>
                  <Link to="/signup">sign up</Link>
                  </li>
                  {user && user.username ? (
                    <>
                      <li>
                        <a href="#" onClick={handleLogout}>logout</a>
                      </li>
                    </>
                  ) : (
                    <li>
                      <Link to="/login">login</Link>
                    </li>
                  )}
              </ul>
              <i className="fa-solid fa-bars fa-lg"></i>
          </nav>
        </header>
      </div>
    )
  }
  
  export default Header;