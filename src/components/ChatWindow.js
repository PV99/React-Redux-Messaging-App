import React from "react";
import store from "../store";
import Header from "../components/Header";
import _ from "lodash";
import Chats from "../components/Chats"; 
import "./ChatWindow.css"
import MessageInput from "../containers/MessageInput";


class ChatWindow extends React.Component{
	render(){ 
	  const state = store.getState();
	  const { typing } = state;
	  const activeUser = state.contacts[this.props.activeUserId];
	  const activeMsgs = state.messages[this.props.activeUserId];  

	  return (
	    <div className="ChatWindow">
	      <Header user={activeUser} />
	      <Chats messages = {_.values(activeMsgs)}/> 
	      <MessageInput value={typing} />
	    </div>
	  ) 
	};
} 

export default ChatWindow;

