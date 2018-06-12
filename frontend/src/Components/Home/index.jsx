import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Events from '../Events/'
import Jumbotron from '../Jumbotron/'
import HomeBody from '../HomeBody/'
import CityCard from '../CityCard/'

class Home extends Component {
  handleCitySelect = (event) => {
    const { pickCity } = this.props
    let cityName = event.target.value

    pickCity(cityName)
  }

  handleCatSelect = (event) => {
    const { pickCategory } = this.props
    let catId = event.target.value

    pickCategory(catId)
  }

  render() {
    const {
      cities,
      categories,
      pickCity
    } = this.props

    //map cities for jumbotron select dropdown
    let citiesJSX = cities.map((city, i) => {
      return (
        <option key={i} value={city.name}>{city.name}</option>
      )
    })

    //map categories for jumbotron select dropdown
    let categoriesJSX = categories.map((category, i) => {
      return (
        <option key={i} value={category.id}>{category.title}</option>
      )
    })

    //map city cards in body
    let cityCardsJSX = cities.map((city, i) => {
      return (
        <CityCard key={i} city={city} pickCity={pickCity} />
      )
    })

    return (
      <div>
        <Jumbotron
          citiesJSX={citiesJSX}
          categoriesJSX={categoriesJSX}
          handleCitySelect={this.handleCitySelect}
          handleCatSelect={this.handleCatSelect}
        />
        <HomeBody
          cityCardsJSX={cityCardsJSX}
        />
        <Switch>
          <Route
            path='/app/events'
            render={routerProps => <Events
              {...routerProps}
            />}
          />
        </Switch>
      </div>
    )
  }
}

export default Home