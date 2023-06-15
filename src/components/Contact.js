import React from 'react';
import simg from '../images/pizzaLeft.jpg';
import '../styles/Contact.css';
function Contact() {
  return (
    <div className="contact">
        <div 
         className="leftSide" 
         style={{backgroundImage:`url(${simg})`}}>          
         </div>
        <div className="rightSide">
             <form id="contact-form" method="POST">
             <h1>Contact Us</h1>
               <label htmlFor='name'>Full Name:</label>    
               <input name="name" placeholder="enter full name..." type="text" />
               <label htmlFor='email'>Email</label>    
               <input name="email" placeholder="enter mail id..." type="email" />
               <label htmlFor='message'>Message</label>    
               <textarea rows="6" placeholder='enter message..' name="message" required></textarea>
               <button type='submit'>SEND MESSAGE</button>         
             </form>   
        </div>  
    </div>   
  );
}
export default Contact;