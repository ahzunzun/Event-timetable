import "./showEventPopup.css"
import Popup from "reactjs-popup"
//TODO: make seperate view for normal users

const showEventPopup = ({event}) => {
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
  }
  const updateEvent = async (e) => {
    //update event
    
  }
  
  const deleteEvent = async (e) => {
    //delete event
  }

    
    return(
        <div className='popup'>
          <div className='popup-content'>
            <h2 className="form-title">Event Details</h2>
            <form onSubmit = {updateEvent}>
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
              <button type="submit" >Update</button>
            </form>
            <button className="delete-button" >
              delete
            </button>
            <button className="close-button" onClick={close}>
              Close
            </button>
            
          </div>
        </div>
    )
}

export default showEventPopup