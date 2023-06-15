import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Contact.css';
function login() {
  return (
    <div className="log">
             <form id="contact-form" method="POST">
             <h1>Login</h1>
               <label htmlFor='email'>Email</label>    
               <input name="email" placeholder="enter mail id..." type="email" />
               <label htmlFor='password'>Password:</label>
                <input type='Password' name="password" placeholder=" " />
               <button type='submit'>Login</button>  
               <p>Don't have an account?<Link to="/SignUp" >SignUp</Link></p>       
             </form>     
   </div>
  );
}
export default login;