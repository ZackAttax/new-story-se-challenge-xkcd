import React from 'react'
import { NavLink } from 'react-router-dom'
import { MenuItems } from './MenuItems'

const NavBar = () => {
    return (
        <nav className="NavBar">
             <ul className='nav-menu'>
                    {MenuItems.map((item, index) => {
                        return (
                           <li key={index}>
                               <NavLink to={item.url}  className={item.cName}>
                                   {item.title} 
                                </NavLink>
                               </li>
                        )
                    })}
                </ul>
        </nav>
    )
}

export default NavBar