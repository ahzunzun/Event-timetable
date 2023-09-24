import { Calendar, dateFnsLocalizer, momentLocalizer } from 'react-big-calendar'
import { useState, useEffect } from 'react'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from 'axios'

const eventsss = [
  {
    start:new Date('2023-09-24T10:00:00.000+00:00'),
    end:new Date('2023-09-24T11:00:00.000+00:00'),
    title: 'test'
  }
]

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
  const [events,setEvents]= useState(null)
  const [renderStatus, reRender] = useState(false);

  useEffect(() => {
    fetchEvents();
  }, [])




  const fetchEvents = async () => {
    const result = await axios.get('http://localhost:3000/api/events');
    setEvents(await result.data.map(event=>{
      return {
        title: event.title,
        start: new Date(event.start) ,
        end: new Date(event.end) ,
        id: event._id,
        describe: event.describe
      }
    }));
  }
  return(
    <div>
      <h1>Events:</h1>
      {events && events.map(event=> {
        return (
          <div key = {event._id}>
            <h2>{event.title}</h2>
          </div>
        )
        

      })}
      <Calendar
      defaultView={'week'}
      //views = {['month', 'week', 'day']}
      localizer={localizer}
      events={eventsss}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 650 }}
      />
    </div>
  )
}




export default MyCalendar