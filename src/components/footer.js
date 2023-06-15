import React from 'react'
import { ImInstagram } from "react-icons/im";
import { ImFacebook2 } from "react-icons/im";
import {ImTwitter } from "react-icons/im";
import { ImLinkedin } from "react-icons/im";
import '../styles/footer.css';
 function footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <p>&copy; 2021 techipizzza.com</p>
            <ImInstagram/>
            <ImFacebook2 />
            <ImTwitter />
            <ImLinkedin />
        </div>
    </div>
  )
}
export default footer;
