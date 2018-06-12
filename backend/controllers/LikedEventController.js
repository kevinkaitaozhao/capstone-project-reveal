const LikedEvent = require('../models/LikedEvent')

module.exports = {
  getLikedEvents: (callback) => {
    LikedEvent
      .fetchAll()
      .then(likedEvents => {
        callback(likedEvents.models.map(likedEvent => likedEvent.attributes))
      })
      .catch(error => {
        console.log(error) 
      })
  }
}