import React, { useState } from 'react';
import './EventPopup.css'; // Create this CSS file for styling

function EventPopup() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="popup-button" onClick={togglePopup}>
        Open Event Popup
      </button>
      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <h2>Event Details</h2>
            <form>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" />
              </div>
              <div className="form-group">
                <label htmlFor="date">Date</label>
                <input type="date" id="date" />
              </div>
              <div className="form-group">
                <label htmlFor="time">Time</label>
                <input type="time" id="time" />
              </div>
              <div className="form-group">
                <label htmlFor="place">Place</label>
                <input type="text" id="place" />
              </div>
              <div className="form-group">
                <label htmlFor="description">Event Description</label>
                <textarea id="description" rows="4"></textarea>
              </div>
              <button type="submit">Create Event</button>
            </form>
            <button className="close-button" onClick={togglePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default EventPopup;
