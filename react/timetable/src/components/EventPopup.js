import React, { useState } from 'react';
import './EventPopup.css';
import Popup from 'reactjs-popup';



function EventPopup() {
  return (
    <Popup trigger={<button className='popup-button'>Add Event</button>}>
      {close => (
        <div className='popup'>
        <div className='popup-content'>
        <h2 className="form-title">Event Details</h2>
            <form>
              <div className="form-group">
                <label htmlFor="title">Title </label>
                <input type="text" id="title" />
              </div>
              <div className="form-group">
                <label htmlFor="date">Date </label>
                <input type="date" id="date" />
              </div>
              <div className="form-group">
                <label htmlFor="time">Time </label>
                <input type="time" id="time" />
              </div>
              <div className="form-group">
                <label htmlFor="place">Place </label>
                <input type="text" id="place" />
              </div>
              <div className="form-group">
                <label htmlFor="description">Event Description </label>
                <textarea id="description" rows="4"></textarea>
              </div>
              <button type="submit">Create Event </button>
            </form>
            <button className="close-button" onClick={close}>
              Close
            </button>
      </div>
    </div>
      )}
        
    </Popup>
  )

}

export default EventPopup;
