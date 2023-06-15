import React from 'react';
import bimg from '../images/multiplePizzas.jpeg';
import '../styles/about.css';
function about() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage: `url(${bimg})`}}></div>
        <div className='aboutBottom'>
            <h1>ABOUT US</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati autem, dolor nam itaque sed aut aspernatur sunt doloribus molestias, placeat porro libero, aliquam nesciunt? Fugiat officiis vitae, dolores illum assumenda atque et doloribus odit quod harum hic laboriosam iure deleniti? Corrupti voluptates optio, rem facere amet, dolorum ullam iste, explicabo quod odio nam eveniet perspiciatis ducimus vero sapiente laudantium quos minima harum voluptate obcaecati autem distinctio? Facilis voluptatum quidem modi, quos ea culpa delectus est, eaque voluptas, odio eum cumque! Distinctio quisquam reiciendis culpa expedita laudantium enim. Facilis temporibus repellat dicta totam est adipisci? Labore quae aut cupiditate ut odio.
            </p>
        </div>
    </div>
  )
}

export default about;