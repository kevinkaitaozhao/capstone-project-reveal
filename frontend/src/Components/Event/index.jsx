import React, { Component } from 'react';
import { Card, CardTitle } from 'react-materialize'

import Details from '../Details/'
import './Event.css'

class Event extends Component {
  //pass event props back up to like function
  handleLike = () => {
    const { like, event } = this.props

    like(
      event.name.text,
      event.description.html,
      event.start.utc,
      event.logo.original.url
    )
  }

  //pass event props back up to pass function
  handlePass = () => {
    const { pass, event } = this.props

    pass(
      event.name.text,
      event.description.html,
      event.start.utc,
      event.logo.original.url
    )
  }

  render() {
    const { i, event, style } = this.props

    //handle if event from api does not have an image
    function eventImageError(eventImage) {
      return (eventImage ? event.logo.original.url : "/assets/images/noimage.png");
    }

    //format event date
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

    let formattedDate = new Date(event.start.utc)

    let eventDay = days[formattedDate.getDay()]
    let eventMonth = months[formattedDate.getMonth()]
    let eventYear = formattedDate.getFullYear()
    let eventHours = formattedDate.getHours() + 1
    let eventMinutes = formattedDate.getMinutes()

    if (eventMinutes < 10) {
      eventMinutes = "0" + eventMinutes;
    }

    var ampm = "am";
    if (eventHours > 12) {
      eventHours -= 12;
      ampm = "pm";
    }

    const eventStartDate = `${eventDay}, ${formattedDate.getDate()} ${eventMonth} ${eventYear}`
    const eventStartTime = `${eventHours}:${eventMinutes}${ampm}`

    return (
      <div key={i} style={style}>
        <div className="row">
          <div className="col s6 offset-s3 event-card">
            <Card header={<CardTitle reveal image={eventImageError(event.logo)} waves='light' />}
              title={event.name.text}
              reveal={
                <Details
                  name={event.name.text}
                  description={event.description.html}
                  startDate={eventStartDate}
                  startTime={eventStartTime}
                  venueId={event.venue_id}
                  logo={eventImageError(event.logo)}
                />
              }>
              <p>{eventStartTime} {eventStartDate}</p>
            </Card>
            <div className="row">
              <div className="col s2 offset-s2">
                <a onClick={this.handlePass}><i className="material-icons medium">cancel</i></a>
              </div>
              <div className="col s2 offset-s4">
                <a onClick={this.handleLike}><i className="material-icons medium">stars</i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Event;