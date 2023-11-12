import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import Events from './Events';

function Navbar() {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const hash = location.hash.substring(1); // remove the '#' symbol
        // Scroll to the element
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location]);

    return (
        <div className="navBar">
            <table>
                <tr>
                    <td><Link to="/">TIMETABLE</Link></td>
                    <td onMouseEnter={() => setActiveDropdown('events')} onMouseLeave={() => setActiveDropdown(null)}>
                      <Link to="/Events">EVENTS</Link>
                    </td>
                </tr>
            </table>
        </div>
    );
}


export default Navbar;