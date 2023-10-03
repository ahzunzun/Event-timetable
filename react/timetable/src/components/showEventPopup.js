import "./showEventPopup.css"
import { useState } from "react"
import Popup from "reactjs-popup"
import axios from "axios"
//TODO: make seperate view for normal users

const ShowEventPopup = ({open, handleClose, event, renderStatus, rerender}) => {

    const deleteEvent = async (id) => {
      const res = await axios.delete(`http://localhost:3000/api/events/${id}/delete`);
      handleClose();
      rerender(!renderStatus);
    }
    

    return (
    <Popup defaultOpen>
      <h1>{event.title}</h1>
      <h2>{event.describe}</h2> 

      <button className="delete-button" onClick = {() => {deleteEvent(event.id)}}>
        Delete
      </button>
      <button className="close-button" onClick={handleClose}>
        Close
      </button>

    </Popup>
    )
}



export default ShowEventPopup