const router = require('express').Router()
const LikedEventController = require('../controllers/LikedEventController')
const LikedEvent = require('../models/LikedEvent')

router.get('/', (req, res) => {
  LikedEventController.getLikedEvents((likedEvent) => {
    res.send(likedEvent)
  })
}) 

module.exports = router