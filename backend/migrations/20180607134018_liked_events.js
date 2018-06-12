exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('liked_events', (table) => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.string('description', 10000).notNullable()
    table.string('time').notNullable()
    table.string('image', 10000).notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('liked_events')
};