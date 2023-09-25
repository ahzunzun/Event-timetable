import { Calendar, dateFnsLocalizer, momentLocalizer } from 'react-big-calendar'
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



const MyCalendar = ({myEventsList, showEventApi, showEventsApi}) => {
  const [open, setOpen] = useState(false);
  const [renderStatus, reRender] = useState(false);
  const [events, setEvents] = useState(null);

useEffect(() => {
  fetchData();
}, [])


  const fetchData = async () => {
    const res = await axios.get("http://localhost:3000/api/events");
    setEvents(await res.data.map(event=>{
      return{
        title: event.title,
        start: new Date(event.start) ,
        end: new Date(event.end) ,
        id: event._id,
        describe: event.describe
      }
    }));
    console.log(events);
  }

  //calendar might break if there is no events in DB 
  return(
    <div>
      {events && 
      <Calendar
      defaultView={'week'}
      //views = {['month', 'week', 'day']}
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 650 }}
      />}
      
    </div>
  )
}

function mapStateToProps({event, events}){
  return{
    event,
    events
  }
}


export default MyCalendar