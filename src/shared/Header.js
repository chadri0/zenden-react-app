import React, { useState } from "react";
import "../styles/Header.css";
import "../styles/MediaQueries.css";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = ({user, setUser}) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
    return (
      <div>
        <header>
          <nav className="navbar">
              <ul className={`navbar-list ${menuOpen ? "open" : ""}`}>
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
          </nav>
        </header>
        <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} className="fa-bars" onClick={toggleMenu}/>
      </div>
    )
  }
  
  export default Header;