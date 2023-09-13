import React, {useState} from 'react'

import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Sidebar.css';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Sidebar() {

  return (
    <>
        <div className='nav-menu'>
            <ul className='nav-menu-items'>
                {SidebarData.map((item, index) => {
                    return (
                       
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    
                    )
                })}
            </ul>
        </div>
    </>
  );
}

export default Sidebar