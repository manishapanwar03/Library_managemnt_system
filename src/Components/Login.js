import React, { useEffect } from 'react'
import '../CSS/Login.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='body'>
            <div className="container" id="container">
                <div className="form-container sign-in-container">
                    <form action="#" className='form_one'>
                        <h1 className='h1'>Sign In</h1>
                        <div className="social-container">
                            <Link className='a'><FacebookIcon /></Link>
                            <Link  className='a'><GoogleIcon /></Link>
                            <Link  className='a'><LinkedInIcon /></Link>
                        </div>
                        <span className='span'>or use your account</span>
                        <input type="email" placeholder="Email" className='input'/>
                        <input type="password" placeholder="Password"  className='input' />
                        <Link to="/otp" className='a'>Forgot your password?</Link>
                        <button className='button'>Sign In</button>
                        <p>Not a Member ? <Link to="/signup" style={{color:"blue"}}>Signup</Link></p>
                    </form>
                </div>
                <div class="overlay-container">
                    <div class="overlay">
                        <div class="overlay-panel overlay-left">
                            <h1 className='h1'>Welcome Back!</h1>
                            <p className='p'>Education is a shared commitment between dedicated teachers, motivated students and enthusiastic parents with high expectations.</p>
                            <button class="ghost" id="signIn" className='button'>Sign In</button>
                        </div>
                        <div class="overlay-panel overlay-right">
                            <h1 className='h1s'>Welcome Back!</h1>
                            <p className='p'>Education is a shared commitment between dedicated teachers, motivated students and enthusiastic parents with high expectations.</p>
                        </div>
                    </div>
                </div>
            </div>
     </div>
    )
}

export default Login

