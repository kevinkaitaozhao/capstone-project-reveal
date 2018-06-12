import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Card, CardTitle } from 'react-materialize'

class CityCard extends Component {
  handleCityClick = (event) => {
    const { pickCity, city } = this.props
    let cityName = city.name

    pickCity(cityName)
  }

  render() {
    const { city } = this.props
    return (
      <div className="col m12 l4">
        <Link to="/app/events" onClick={this.handleCityClick}>
          <Card className='small' header={<CardTitle image={city.imgUrl}></CardTitle>}>
            <h3 className="city-name center-align">{city.name}</h3>
          </Card>
        </Link>
      </div>
    )
  }
}

export default CityCard