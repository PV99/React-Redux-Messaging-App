import user from "./user";
import messages from "./messages"
import contacts from "./contact";
import activeUserId from "./activeUserId";
import typing from "./typing" 
import { combineReducers } from "redux";


export default combineReducers({
  user,
  messages, 
  typing,
  contacts,
  activeUserId, 

});