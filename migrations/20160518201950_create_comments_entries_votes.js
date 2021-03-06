
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('comments', function (table) {
      table.increments();
      table.timestamps();
      table.string('posted_by');
      table.text('content');
      table.integer('entry_id');
    }),

    knex.schema.createTable('entries', function (table) {
      table.increments();
      table.timestamps();
      table.string('repository_name');
      table.string('posted_by');
    }),

    knex.schema.createTable('votes', function (table) {
      table.increments();
      table.timestamps();
      table.integer('entry_id');
      table.integer('vote_value');
      table.string('username');
    }),
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('comments'),
    knex.schema.dropTable('entries'),
    knex.schema.dropTable('votes'),
  ]);
};
