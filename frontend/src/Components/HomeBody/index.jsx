import React, { Component } from 'react';

import './HomeBody.css';

class HomeBody extends Component { 
  render() {
    const { cityCardsJSX } = this.props
    return (
      <div className="body">
        <div className="row">
          <div className="col s12">
            <h1 className="body-header center-align">Find an event that suits you</h1>
            <h3 className="body-subheader center-align">Explore your city and find out what's going on.</h3>
          </div>
        </div>
        <div className="row city-container">
          {cityCardsJSX}
        </div>
      </div>
    )
  }
}

export default HomeBody