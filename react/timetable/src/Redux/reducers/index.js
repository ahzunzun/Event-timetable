import { combineReducers } from "redux";
import EventReducer from "./EventReducer";
import EventsReducer from "./EventsReducer";
import ErrorReducer from "./ErrorReducer";

const rootReducer = combineReducers({
    event: EventReducer ,
    events: EventsReducer,
}) 

export default rootReducer;