exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('userFirstName').notNullable().defaultTo('');
    table.string('userLastName').notNullable().defaultTo('');
    table.string('userEmail').notNullable().defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
