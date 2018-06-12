import React, { Component } from 'react';
import { Navbar, NavItem } from 'react-materialize'

import './LoadingScreen.css'

class LoadingScreen extends Component {
  render() {
    return (
      <div>
        <Navbar className="event-nav" brand="reveal" right>
          <NavItem className="event-nav-item">My Events</NavItem>
        </Navbar>
        <div className="loading-screen">
          <div className="loader"></div>
        </div>
      </div>
    );
  }
}

export default LoadingScreen;