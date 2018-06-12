const knexConfig = require('../knexfile')
const knex = require('knex')(knexConfig)
const bookshelf = require('bookshelf')(knex)
 
const LikedEvent = bookshelf.Model.extend({
  tableName: 'liked_events'
}) 

module.exports = LikedEvent