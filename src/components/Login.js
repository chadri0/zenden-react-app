import React from 'react';

const Login = () => {
    return (
      <div>
        <main>
        <h1>Welcome Back!</h1>
        <form action="#" className="login-form">
            <div className="login-field">
                <label htmlFor="email">Email address:</label>
                <input type="email" name="email" id="email" required/>
            </div>
            <div className="login-field">
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" required/>
            </div>
            <div className="login-btn-container">
                <button type="button" className="login-button">Login</button>
            </div>
            <div className="remember-me-label">
                <label>
                    <input type="checkbox" checked="checked" name="remember"/> Remember me
                  </label>
            </div>
            <div className="cancel-forgot-links">
                <button type="button" className="cancel-button">Cancel</button>
                <span className="forgot-password"><a href="#">Forgot password?</a></span>
            </div>
            <div className="dnt-have-accnt-container">
                <p>Don't have an account yet? <a href="#">Sign up</a></p>
                </div>
        </form>
        </main>
      </div>
    )
  }
  
  export default Login;