import React, { Component } from 'react';

import './Details.css'
import ReactHtmlParser from 'react-html-parser';

class Details extends Component {
  render() {
    const {
      description,
      startDate,
      startTime,
      logo
    } = this.props
    return (
      <div>
        <div className="row detail-row">
          <div className="col s12">
            <img src={logo} alt="event logo" className="responsive-img detail-img"/>
          </div>
        </div>
        <div className="row detail-row">
          <div className="col s12">
            <p className="detail-time">{startTime} {startDate}</p>
          </div>
        </div>
        <div className="row detail-row">
          <div className="col s12">
            {ReactHtmlParser(description)}
          </div>
        </div>
      </div>
    )
  }
}

export default Details;