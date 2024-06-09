import React from 'react';

const Signup = () => {
    return (
      <div>
        <main>
        <h1>Sign Up!</h1>
        <p className="signup-paragraph">Please fill in this form to create a free account.</p>
        <form action="#" className="signup-form">
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
            <div className="signup-field">
                <label htmlFor="confirm-password">Confirm password:</label>
                <input type="password" name="confirm-password" id="confirm-password" required/>
            </div>
            <div className="cancel-signup-btns">
                <button type="button" className="cancel-button">Cancel</button>
                <button type="button" className="signup-button">Sign Up</button>
            </div>
            <div className="alrdy-have-accnt-container">
            <p>Already have an account? <a href="#">Login</a></p>
            </div>
        </form>
        </main>
      </div>
    )
  }
  
  export default Signup;