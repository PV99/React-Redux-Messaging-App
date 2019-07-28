import React, { Component } from 'react';

import "./Main.css";

import Empty from "../components/Empty";
import ChatWindow from "../components/ChatWindow";

class Main extends Component { 

	render(){ 
		
		

		const renderMainContent = () => {
		    if (!this.props.activeUserId) {
		    	return <Empty user={this.props.user} activeUserId={this.props.activeUserId} />;
		    } 
		    else {
		    	return <ChatWindow activeUserId={this.props.activeUserId} />;
		    }
		};

		return (

			<main className="Main">{renderMainContent()}</main>

		)
	}

}

export default Main 