// import React, { useEffect } from 'react'
// import '../CSS/Login.css'
// import FacebookIcon from '@mui/icons-material/Facebook';
// import GoogleIcon from '@mui/icons-material/Google';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import { Link } from 'react-router-dom';

// const Login = () => {
//     return (
//         <div className='body'>
//             <div className="container" id="container">
//                 <div className="form-container sign-in-container">
//                     <form action="#" className='form'>
//                         <h1 className='h1'>Sign Up</h1>
//                         <div className="social-container">
//                             <Link className='a'><FacebookIcon /></Link>
//                             <Link className='a'><GoogleIcon /></Link>
//                             <Link className='a'><LinkedInIcon /></Link>
//                         </div>
//                         {/* <span className='span'>or use your account</span> */}
//                         <input type="email" placeholder="Name" className='input' />
//                         <input type="email" placeholder="Email" className='input' />
//                         <input type="password" placeholder="Password" className='input' />   
//                         <input type="password" placeholder="Confirm Password" className='input' />
//                         {/* <Link  className='a'>Forgot your password?</Link> */}
//                         <button className='button'>Sign Up</button>
//                         {/* <p>Not a Member ? <Link to="/signup" style={{color:"blue"}}>Signup</Link></p> */}
//                     </form>
//                 </div>
//                 <div class="overlay-container">
//                     <div class="overlay">
//                         <div class="overlay-panel overlay-left">
//                             <h1 className='h1'>Hello Friend!</h1>
//                             <p className='p'>Education is a shared commitment between dedicated teachers, motivated students and enthusiastic parents with high expectations.</p>
//                             {/* <button class="ghost" id="signIn" className='button'>Sign Up</button> */}
//                         </div>
//                         <div class="overlay-panel overlay-right">
//                             <h1 className='h1s'>Welcome Back!</h1>
//                             <p className='p'>Education is a shared commitment between dedicated teachers, motivated students and enthusiastic parents with high expectations.</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Login

// import React from 'react'
// import '../CSS/Signup.css'
// const Signup = () => {
//     return (
//         <div>
//             <div class="login-wrap">
//                 <div class="login-html">
//                     {/* <input id="tab-1" type="radio" name="tab" class="sign-in" checked /><label for="tab-1" class="tab">Sign In</label> */}
//                     <input id="tab-1" type="radio" name="tab" class="sign-up" /><label for="tab-1" class="tab">Sign Up</label>
//                     <div class="login-form">
//                         {/* <div class="sign-in-htm">
//                             <div class="group">
//                                 <label for="user" class="label">Username</label>
//                                 <input id="user" type="text" class="input" />
//                             </div>
//                             <div class="group">
//                                 <label for="pass" class="label">Password</label>
//                                 <input id="pass" type="password" class="input" data-type="password" />
//                             </div>
//                             <div class="group">
//                                 <input id="check" type="checkbox" class="check" checked />
//                                 <label for="check"><span class="icon"></span> Keep me Signed in</label>
//                             </div>
//                             <div class="group">
//                                 <input type="submit" class="button" value="Sign In" />
//                             </div>
//                             <div class="hr"></div>
//                             <div class="foot-lnk">
//                                 <a href="#forgot">Forgot Password?</a>
//                             </div>
//                         </div> */}
//                         <div class="sign-up-htm">
//                             <div class="group">
//                                 <label for="user" class="label">Username</label>
//                                 <input id="user" type="text" class="input" />
//                             </div>
//                             <div class="group">
//                                 <label for="user" class="label">Username</label>
//                                 <input id="user" type="text" class="input" />
//                             </div>
//                             <div class="group">
//                                 <label for="user" class="label">Username</label>
//                                 <input id="user" type="text" class="input" />
//                             </div>
//                             <div class="group">
//                                 <label for="pass" class="label">Password</label>
//                                 <input id="pass" type="password" class="input" data-type="password" />
//                             </div>
//                             <div class="group">
//                                 <label for="pass" class="label">Repeat Password</label>
//                                 <input id="pass" type="password" class="input" data-type="password" />
//                             </div>
//                             <div class="group">
//                                 <label for="pass" class="label">Email Address</label>
//                                 <input id="pass" type="text" class="input" />
//                             </div>
//                             <div class="group">
//                                 <input type="submit" class="button" value="Sign Up" />
//                             </div>
//                             <div class="hr"></div>
//                             <div class="foot-lnk">
//                                 <label for="tab-1">Already Member?</label>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Signup


import React, { useState } from 'react';
import '../CSS/Signup.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';

const Signup = () => {
    const [selectedUserType, setSelectedUserType] = useState(null);

    const handleUserTypeSelect = (userType) => {
        setSelectedUserType(userType);
    };

    return (
        <div>
            <div className="form">
                <ul className="tab-group">
                    <li className="tab active li_signup"><a href="#signup" className='a_signup'>Sign Up</a></li>
                </ul>
                <div>
                    <div id="signup">
                        <h1 className='h1_signup'>Enter User Information</h1>
                        <form action="/" method="post" className='form1'>
                            <div className="field-wrap">
                                <label className='label_Signup'>
                                    First Name<span className="req">*</span>
                                </label>
                                <input type="text" required autoComplete="off" className='input_signup' />
                            </div>

                            <div className="field-wrap">
                                <label className='label_Signup'>
                                    Last Name<span className="req">*</span>
                                </label>
                                <input type="text" required autoComplete="off" className='input_signup' />
                            </div>

                            <div className="field-wrap">
                                <label className='label_Signup'>
                                    Contact Number<span className="req">*</span>
                                </label>
                                <input type="tel" required autoComplete="off" className='input_signup' />
                            </div>

                            <div className="field-wrap">
                                <label className='label_Signup'>
                                    Address<span className="req">*</span>
                                </label>
                                <textarea required autoComplete="off" className='input_signup'></textarea>
                            </div>

                            <div className="field-wrap">
                                <label className='label_Signup'>
                                    Email Address<span className="req">*</span>
                                </label>
                                <input type="email" required autoComplete="off" className='input_signup' />
                            </div>

                            <div className="field-wrap">
                                <label className='label_Signup'>
                                    User Type<span className="req">*</span>
                                </label>
                                <ul className="user-type-list">
                                    <li onClick={() => handleUserTypeSelect('Jumper')}>
                                        Student
                                    </li>
                                    <li  onClick={() => handleUserTypeSelect('Hoodie')}>
                                        Employee
                                    </li>
                                    <li  onClick={() => handleUserTypeSelect('Vest')}>
                                        University
                                    </li>
                                 </ul>
                            </div>
                            <div className="field-wrap">
                                <label className='label_Signup'>
                                Payment method<span className="req">*</span>
                                </label>
                                <select value={selectedUserType} onChange={handleUserTypeSelect} className='input_signup'>
                                    <option value="">Select Payment method</option>
                                    <option value="Student">Student</option>
                                    <option value="Employee">Employee</option>
                                    <option value="University">University</option>
                                </select>
                            </div>

                            <button type="submit" className="button_signup button_signup-block"><Link to="/" style={{color:"#FF416C",textDecoration:"none"}}>Submit</Link></button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
