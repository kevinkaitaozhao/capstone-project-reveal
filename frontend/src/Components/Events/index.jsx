import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { Navbar } from 'react-materialize'
import axios from 'axios'

import Event from '../Event/'
import LoadingScreen from '../LoadingScreen/'
import EventsList from '../EventsList/'
import LikedEvents from '../LikedEvents/'
import Chat from '../Chat/'
import './Events.css'

class Events extends Component {
  constructor(props) {
    super(props)

    this.state = {
      events: [],
      index: 0,
      likedEvents: [],
      passedEvents: []
    }
  }

  //load in event search results from backend eventbrite api
  componentDidMount() {
    axios.get('http://localhost:8080/')
      .then((response) => {
        this.setState({
          events: response.data
        })
      })
    //load in previously liked events from postgres database
    axios.get('http://localhost:8080/likedevents')
      .then((response) => {
        this.setState({
          likedEvents: response.data
        })
      })
  }

  //handle liking an event
  like = (name, description, time, image) => {
    const { events, index, likedEvents } = this.state
    if (index < events.allEvents.length - 1) {
      this.setState({
        index: index + 1
      })
    }

    likedEvents.push({
      name: name,
      description: description,
      time: time,
      image: image
    })

    this.setState({
      likedEvents
    })

    //add liked event to postgres database
    let lastLikedEvent = likedEvents[likedEvents.length - 1]
    axios.post('http://localhost:8080/likedevents', lastLikedEvent)
      .then((response) => {
        console.log(response)
      }).catch((error) => {
        console.log(error)
      })
  }

  //handle passing an event
  pass = (name, description, time, image) => {
    const { events, index, passedEvents } = this.state
    if (index < events.allEvents.length - 1) {
      this.setState({
        index: index + 1
      })
    }

    passedEvents.push({
      name: name,
      description: description,
      time: time,
      image: image
    })

    this.setState({
      passedEvents
    })
  }

  render() {
    const { events, index, likedEvents } = this.state

    //loading screen to account for loading time for api callbacks
    if (events.length < 1) {
      return (
        <LoadingScreen />
      )
    }

    //map out events from api results
    const eventsList = events.allEvents.map((event, i) => {
      const style = {
        display: i === index ? 'block' : 'none'
      }
      return (
        <Event
          key={i}
          event={event}
          index={index}
          style={style}
          like={this.like}
          pass={this.pass}
        />
      )
    })

    return (
      <div>
        <Navbar className="event-nav" brand="reveal" right>
        </Navbar>
        <div className="row event-container">
          <div className="col s9 results-chat-container">
            <Switch>
              <Route
                path='/app/events'
                render={routerProps => <EventsList
                  {...routerProps}
                  eventsList={eventsList}
                />}
              />
              <Route
                path={'/app/chat'}
                render={routerProps => <Chat
                  {...routerProps}
                  likedEvents={likedEvents}
                />}
              />
            </Switch>
          </div>
          <LikedEvents likedEvents={likedEvents} />
        </div>
      </div>
    );
  }
}

export default Events;