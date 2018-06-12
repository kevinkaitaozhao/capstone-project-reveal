import React, { Component } from 'react';

class EventsList extends Component {
  render() {
    const { eventsList } = this.props
    return (
      <div>
        {eventsList}
      </div>
    )
  }
}

export default EventsList;