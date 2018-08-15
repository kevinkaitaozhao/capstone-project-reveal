import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Navbar, Input, Button } from 'react-materialize'

import './Jumbotron.css';

class Jumbotron extends Component {
  render() {
    const {
      citiesJSX,
      categoriesJSX,
      handleCitySelect,
      handleCatSelect
    } = this.props
    return ( 
      <div className="jumbotron">
        <Navbar className="nav" brand="reveal" right></Navbar>
        <div className="selection-panel">
          <div className="row">
            <div className="col s12">
              <h1 className="jumbotron-header center-align">Reveal Your Event</h1>
              <h3 className="jumbotron-subheader center-align">Discover and Attend Events in Your Area</h3>
            </div>
          </div>
          <div className="row">
            <div className="col s10 offset-s1">
              <div className="row">
                <div className="card-panel left-input col s6">
                  <Input s={12} type='select' label="City" onChange={handleCitySelect} className="dropdown-box">
                    <option value="" disabled selected>Choose your city</option>
                    {citiesJSX}
                  </Input>
                </div>
                <div className="card-panel col s6">
                  <Input s={12} type='select' label="Category" onChange={handleCatSelect} className="dropdown-box">
                    <option value="" disabled selected>Choose your category</option>
                    {categoriesJSX}
                  </Input>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s2 offset-s5">
                <div className="row">
                  <div className="col s12">
                    <Button className="btn"><Link to="/app/events">Search</Link></Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Jumbotron