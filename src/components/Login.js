import React from 'react';
import {useNavigate, Link} from "react-router-dom";

function Login({user, setUser}) {
    const navigate = useNavigate();

        const loginSubmit = (e) => {
            e.preventDefault();
            console.log("Login submit handler ran.")

            const formData = new FormData(e.target);
            // const data = {};
            for (const [key, value] of formData.entries()) {
                // data[key] = value;
                console.log(`${key}: ${value}`);
            }

            fetch(`http://localhost:4000/login/local`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(),
            })
            .then((response) => response.json())
            .then((result) => {
                console.log("result :>>", result);
                localStorage.setItem("user", JSON.stringify(result.data));
                setUser(result.data);
                navigate("/")
            })
            .catch((error) => console.log("error user or password is incorrect :>>", error));
        };

    return (
      <div>
        <main>
        <h1>Welcome Back!</h1>
        <form onSubmit={loginSubmit} className="login-form">
            <div className="login-field">
                <label htmlFor="email">Email address:</label>
                <input type="email" name="email" id="email" required/>
            </div>
            <div className="login-field">
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" required/>
            </div>
            <div className="login-btn-container">
                <button type="submit" className="login-button">Login</button>
            </div>
            <div className="remember-me-label">
                <label>
                    <input type="checkbox" checked="checked" name="remember"/> Remember me
                  </label>
            </div>
            <div className="cancel-forgot-links">
                <button type="button" className="cancel-button" onClick={() => navigate("/")}>Cancel</button>
            </div>
            <div className="dnt-have-accnt-container">
                <p>Don't have an account yet? <Link to="/signup">Sign up</Link></p>
                </div>
        </form>
        </main>
      </div>
    )
  }
  
  export default Login;