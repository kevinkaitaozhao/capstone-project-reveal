import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'

import Home from '../Home/'
import Events from '../Events/'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pickedCity: '',
      pickedCategory: 0,
      cities: [
        {
          name: 'Vancouver',
          imgUrl: '/images/cities/vancouver.jpg'
        },
        {
          name: 'Toronto',
          imgUrl: '/images/cities/toronto.jpg'
        },
        {
          name: 'Seattle',
          imgUrl: '/images/cities/seattle.jpg'
        },
        {
          name: 'San Francisco',
          imgUrl: '/images/cities/sanfrancisco.jpg'
        },
        {
          name: 'Los Angeles',
          imgUrl: '/images/cities/losangeles.jpg'
        },
        {
          name: 'Chicago',
          imgUrl: '/images/cities/chicago.jpg'
        },
        {
          name: 'New York City',
          imgUrl: '/images/cities/newyorkcity.jpg'
        },
        {
          name: 'Boston',
          imgUrl: '/images/cities/boston.jpg'
        },
        {
          name: 'Washington D.C.',
          imgUrl: '/images/cities/washingtondc.jpg'
        }
      ],
      categories: [
        {
          title: 'Music',
          id: 103
        },
        {
          title: 'Networking',
          id: 101
        },
        {
          title: 'Food & Drink',
          id: 110
        },
        {
          title: 'Performing & Visual Arts',
          id: 105
        },
        {
          title: 'Sports & Fitness',
          id: 108
        },
        {
          title: 'Travel & Outdoor',
          id: 109
        },
        {
          title: 'Charity & Causes',
          id: 111
        },
        {
          title: 'Seasonal & Holiday',
          id: 106
        }
      ]
    }
  }

  componentDidUpdate() {
    const {
      pickedCity,
      pickedCategory
    } = this.state

    axios.post('http://localhost:8080/filters', { pickedCity, pickedCategory })
      .then((response) => {
        console.log(response)
      }).catch((error) => {
        console.log(error)
      })
  }

  pickCity = (name) => {
    this.setState({
      pickedCity: name
    })
  }

  pickCategory = (id) => {
    this.setState({
      pickedCategory: id
    })
  }

  render() {
    const { cities, categories } = this.state
    return (
      <div>
        <div className="container">
          <Switch>
            <Route
              exact path="/"
              render={routerProps => <Home
                {...routerProps}
                cities={cities}
                categories={categories}
                pickCity={this.pickCity}
                pickCategory={this.pickCategory}
              />}
            />
            <Route
              path="/app"
              render={routerProps => <Events
                {...routerProps}
              />}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
