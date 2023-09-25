import React, { useState } from 'react';
import './EventPopup.css';
import Popup from 'reactjs-popup';
import axios from 'axios';



function EventPopup() {
// state
const [createForm, setCreateForm] = useState({
  title: '',
  start: new Date(),
  end: new Date(),
  describe: '',
  venue: ''
})
// functions
const updateCreateFormField = (e) => {
  const {name, value} = e.target;
  setCreateForm({
    ...createForm,
    [name]: value,
  })
  console.log(createForm);
}
const createEvent = async (e) => {
  e.preventDefault();
  console.log(createForm);
  const res = await axios.post("http://localhost:3000/api/events", createForm)
  
}





  return (
    <Popup trigger={<button className='popup-button'>Add Event</button>}>
      {close => (
        <div className='popup'>
        <div className='popup-content'>
        <h2 className="form-title">Event Details</h2>
            <form onSubmit = {createEvent}>
              <div className="form-group">
                <label htmlFor="title">Title </label>
                <input onChange = {updateCreateFormField} type="text" name="title" />
              </div>
              <div className="form-group">
                <label htmlFor="datetime-local">Start Date </label>
                <input onChange = {updateCreateFormField} type="datetime-local" name="start" />
              </div>
              <div className="form-group">
                <label htmlFor="datetime-local">End Date </label>
                <input onChange = {updateCreateFormField} type="datetime-local" name="end" />
              </div>
              <div className="form-group">
                <label htmlFor="place">Place </label>
                <input onChange = {updateCreateFormField} type="text" name="venue" />
              </div>
              <div className="form-group">
                <label htmlFor="description">Event Description </label>
                <textarea onChange = {updateCreateFormField} name="describe" rows="4"></textarea>
              </div>
              <button type="submit" >Create Event </button>
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
