import React, { Component } from 'react';
import "./Sidebar.css";
import User from '../containers/User'

class Sidebar extends Component {

	state = {

		hello: "five",
	}

	consoleLogHello = () => {
		console.log(this.state.hello);
	};

	render() {

		console.log(this.state.hello);
		this.consoleLogHello();
		return (

			<aside className="Sidebar">
				<div className = "Contacts">
					CONTACTS
				</div>
				{this.props.contacts.map(contact => <User user={contact} key={contact.user_id} />)}
			</aside>

		)
	}

}

export default Sidebar 