import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './LikedEvents.css'

class LikedEvents extends Component {
  render() {
    const { likedEvents } = this.props
    
    const likedEventsJSX = likedEvents.map((likedEvent, i) => {
      //format event date
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

      let formattedDate = new Date(likedEvent.time)

      let eventDay = days[formattedDate.getDay()]
      let eventMonth = months[formattedDate.getMonth()]
      let eventYear = formattedDate.getFullYear()
      let eventMinutes = formattedDate.getMinutes()

      if (eventMinutes < 10) {
        eventMinutes = "0" + eventMinutes;
      }

      const eventStartDate = `${eventDay}, ${formattedDate.getDate()} ${eventMonth} ${eventYear}`

      return (
        <Link to={'/app/chat'} key={i}>
          <div className="row liked-event">
            <div className="col s4">
              <img src={likedEvent.image} alt="event logo" className="responsive-img liked-img" />
            </div>
            <div className="col s8">
              <p className="liked-name">{likedEvent.name}</p>
              <p className="liked-time">{eventStartDate}</p>
            </div>
          </div> 
        </Link>
      )
    })

    return (
      <div className="col s3  my-events">
        <h1 className="my-events-header center-align">My Events</h1>
        {likedEventsJSX}
      </div>
    );
  }
}

export default LikedEvents;