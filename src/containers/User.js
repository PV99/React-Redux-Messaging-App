import React, { Component } from 'react';
import "./User.css";
import { setActiveUserId } from "../actions";
import store from "../store";


class User extends Component {

	constructor(props) {

		super(props);
	}

	handleUserClick = ({ user_id }) => {
		console.log(user_id);
		store.dispatch(setActiveUserId(this.props.user.user_id));
	}

	render() {

		const { name, profile_pic, status } = this.props.user;

		return (

			<div className="User" onClick={() => this.handleUserClick(this.props.user)}>
				<div className="User__intro">
					<img src={profile_pic} alt={name} className="User__pic" />
					<p className="User__intro-name">{name}</p>
				</div>
				<div className="User__details">

					<p className="User__details-status">{status}</p>
				</div>
			</div>

		)
	}

}



export default User 