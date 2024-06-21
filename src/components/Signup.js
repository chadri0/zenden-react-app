import React from 'react';
import "../styles/Signup.css";
import "../styles/MediaQueries.css";
import { useNavigate, Link } from "react-router-dom";

function Signup({user, setUser}) {
    const navigate = useNavigate();

    const signupSubmit = (e) => {
        e.preventDefault();
        console.log("Signup submit handler ran.")
        const formData = new FormData(e.target);
        for (const [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

        fetch(`http://localhost:4000/signup`, {
            method: "POST",
            body: JSON.stringify(formData),
        })
        .then((response) => response.json())
        .then((result) => {
            console.log("result :>>", result);
            localStorage.setItem("user", JSON.stringify(formData.data));
            setUser(result.data);
            // navigate("/")
        })
        .catch(error => console.log("error creating new user:>>", error));
    }

    return (
      <div>
        <main>
        <h1>Sign Up!</h1>
        <p className="signup-paragraph">Please fill in this form to create a free account.</p>
        <form onSubmit={signupSubmit} className="signup-form">
            <div className="signup-field">
                <label htmlFor="first-name">First name:</label>
                <input type="text" name="first-name" id="first-name" required/>
            </div>
            <div className="signup-field">
                <label htmlFor="last-name">Last name:</label>
                <input type="text" name="last-name" id="last-name"/>
            </div>
            <div className="signup-field">
                <label htmlFor="email">Email address:</label>
                <input type="email" name="email" id="email" required/>
            </div>
            <div className="signup-field">
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" required/>
            </div>
            {/* <div className="signup-field">
                <label htmlFor="confirm-password">Confirm password:</label>
                <input type="password" name="confirm-password" id="confirm-password" required/>
            </div> */}
            <div className="cancel-signup-btns">
                <button type="button" className="cancel-button" onClick={() => navigate('/')}>Cancel</button>
                <button type="submit" className="signup-button">Sign Up</button>
            </div>
            <div className="alrdy-have-accnt-container">
            <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
        </form>
        </main>
      </div>
    )
  }
  
  export default Signup;