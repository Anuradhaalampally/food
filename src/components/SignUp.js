import React from 'react';
import "../styles/SignUp.css";
function SignUp() {
  return (
    <div className='login'>
      <h1>Sign Up!!</h1>
            <form id="login-form" method='POST'>
                <label htmlFor='name'>Name:</label>
                <input type="text" name="name" placeholder='enter full name..' />
                <label htmlFor='email'>Email:</label>
                <input type='email' name="email" placeholder="enter mail id..."/>
                <label htmlFor='password'>Password:</label>
                <input type='Password' name="password" placeholder=" " />
                <label htmlFor='password'>Confirm Password:</label>
                <input type='Password' name="password" placeholder=" " />
                <label htmlFor="phoneno">Mobile Number:</label>
                <input type="tel" name="phoneno" placeholder="must be 10 digits" />
                <label htmlFor='address'>Address:</label>
                <textarea rows="5" name="address" placeholder="enter correct address" required></textarea>
                <button type="submit">SIGNUP</button>
            </form>
        </div>
  );
}

export default SignUp;