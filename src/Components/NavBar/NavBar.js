import React from 'react';
import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItems';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="NavBar">
             <ul className='nav-menu'>
                    {MenuItems.map((item, index) => {
                        return (
                           <li key={index}>
                               <Link to={item.url}  className={item.cName}>
                                   {item.title} 
                                </Link>
                               </li>
                        )
                    })}
                </ul>
        </nav>
    )
}

export default NavBar