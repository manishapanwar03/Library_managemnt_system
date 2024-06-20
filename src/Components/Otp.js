import React from 'react'
import '../CSS/Otp.css'
import { Link } from 'react-router-dom'
const Otp = () => {
    return (
        <div>
            <div style={{ paddingTop: "70px" }}></div>
            <div class="row">
                <h1>Forgot Password</h1>
                <h6 class="information-text">Enter your registered email to reset your password.</h6>
                <div class="form-group">
                    <input type="email" name="user_email" id="user_email" />
                    <p><label for="username">Email</label></p>
                    <button onclick="showSpinner()">Reset Password</button>
                </div>
                <div class="footer">
                    <h5>New here? <Link to="/signup">Sign Up.</Link></h5>
                    <h5>Already have an account? <Link to="/">Sign In.</Link></h5>
                      
                </div>
            </div>
        </div>
    )
}

export default Otp