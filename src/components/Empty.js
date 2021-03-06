import React, { Component } from "react";
import "./Empty.css";

class Empty extends Component {

  render() {
    const { name, profile_pic, status } = this.props.user;
    const first_name = name.split(" ")[0];

    return (
      <div className="Empty">
        <h1 className="Empty__name">Welcome, {first_name} </h1>
        <img src={profile_pic} alt={name} className="Empty__img" />
        <p className="Empty__status">
          <b>Status:</b> {status}
        </p>
        <button className="Empty__btn">Start a conversation</button>
        <p className="Empty__info">
          Go to contacts to search for someone to start chatting with!
        </p>
      </div>
    )
  }
}

export default Empty;