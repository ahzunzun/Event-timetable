import "./showEventPopup.css"
import { useState } from "react"
import Popup from "reactjs-popup"
//TODO: make seperate view for normal users

const ShowEventPopup = ({open, handleClose, event, renderStatus, rerender}) => {
    return (
    <Popup defaultOpen>
      <button className="close-button" onClick={handleClose}>
        Close
      </button>
    </Popup>
    )
}

export default ShowEventPopup