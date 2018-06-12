const request = require('request')
const express = require('express')
const app = express()
const port = process.env.port || 8080
const bodyParser = require('body-parser')

const knexConfig = require('./knexfile')
const knex = require('knex')(knexConfig)
const bookshelf = require('bookshelf')(knex) 

// middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// serve CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//global variables
let city = ''
let category = 0
let likedEvents = []
let passedEvents = []

//endpoints to set global variables based on FE user input
app.post('/filters', (req, res) => {
  city = req.body.pickedCity
  category = req.body.pickedCategory
  likedEvents = req.body.likedEvents
  passedEvents = req.body.passedEvents

  res.json({ success: true })
})

app.post('/events', (req, res) => {
  likedEvents = req.body.likedEvents
  passedEvents = req.body.passedEvents

  res.json({ success: true })
})

//endpoints to request eventbrite api 
const apiKey = 'I6LDDDO3UXJ7BERT2W6X'

app.get('/', (req, res) => {
  if (city && category) {
    request(`https://www.eventbriteapi.com/v3/events/search/?location.address=${city}&categories=${category}&token=${apiKey}`, ((error, response, body) => {
      let requestBody = JSON.parse(body)
      let allEvents = requestBody.events
      res.send({ allEvents })
    }))
  } else if (city && !category) {
    request(`https://www.eventbriteapi.com/v3/events/search/?location.address=${city}&token=${apiKey}`, ((error, response, body) => {
      let requestBody = JSON.parse(body)
      let allEvents = requestBody.events
      res.send({ allEvents })
    }))
  }
})

//postgres database

//postgres database require routes
const LikedEvents = require('./routes/LikedEvents')

//postgres database call endpoints
app.use('/likedevents', LikedEvents)

const LikedEvent = bookshelf.Model.extend({
  tableName: 'liked_events'
})

app.post('/likedevents', (req, res) => {
  console.log(req.body)
  let newLikedEvent = new LikedEvent({
    name: req.body.name,
    description: req.body.description,
    time: req.body.time,
    image: req.body.image
  })

  newLikedEvent.save()
    .then(likedEvent => {
      console.log(likedEvent)
    })
})

// port listening
app.listen(port, function () {
  console.log(`listening on ${port}`)
  console.log('Press CTRL + C to stop server')
})