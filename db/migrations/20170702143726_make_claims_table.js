exports.up = function(knex) {
  return knex.schema.createTable('claims', (table) => {
    table.increments();
    table.string('claimNumber').notNullable().defaultTo('');
    table.integer('user_id').notNullable().references('id').inTable('users').onDelete('CASCADE');
    table.string('email').notNullable().defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('claims');
};
