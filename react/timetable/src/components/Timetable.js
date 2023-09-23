import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import { useState, useEffect } from 'react'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from 'axios'


const locales = {
  'en-US': enUS,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})



const MyCalendar = ({myEventsList}) => {
  const [data, setData] = useState(null);
    
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get('http://localhost:3000/api/events/');
    setData(res.data);
    /*const convertedDates = await res.data.map(event=>{
      return{
        title: event.title,
        start: new Date(event.start) ,
        end: new Date(event.end) ,
        id: event._id,
        describe: event.describe
      }
    })*/
    
  };
  
  return(
    <div>
      <h2>Events from backend/DB:</h2>
      {data && data.map(event => {
        return (
          <div key={event._id}>
            <h3>{event.title}</h3>
          </div>
        );
      })}
      <Calendar
      defaultView={'week'}
      views = {['month', 'week', 'day']}
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 650 }}
      />
    </div>
  )
}




export default MyCalendar