import React from 'react';

const Header = () => {
    return (
      <div>
        <nav>
            <ul className="navbar-list">
                <li><a href="#">login</a></li>
                <li><a href="#">sign up</a></li>
                <li><a href="#">to do list</a></li>
            </ul>
            <i className="fa-solid fa-bars fa-lg"></i>
        </nav>
      </div>
    )
  }
  
  export default Header;