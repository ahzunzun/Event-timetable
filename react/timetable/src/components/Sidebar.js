import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './Sidebar.css';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Sidebar() {
  const [termBar, settermBar] = useState(false);
  const showtermBar = () => settermBar(!termBar);
  


  return (
    <div className='sidebar'>
        <div className='calendar'>
            <Calendar></Calendar>
        </div>
    </div>
   
    
  );
}



export default Sidebar