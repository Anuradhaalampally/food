import React from 'react';
import { Menulist} from '../menusinfo/menulist.js';
import MenuItem from '../components/menuitem.js';
import '../styles/menu.css';
function Menu() {
  return (
    <div className='menu'>
        <h1 className='menuTitle'>Our Menu</h1>
        <div className='menuList'>{Menulist.map((menuItem,key)=>{
            return (<MenuItem 
            key={key}
            image={menuItem.image} 
            name={menuItem.name} 
            price={menuItem.price} />
            );
            })}</div>
    </div>
  )
}

export default Menu;