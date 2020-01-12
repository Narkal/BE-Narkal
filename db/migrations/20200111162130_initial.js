
exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('users', function(table) {
      table.increments('id').primary();
      table.string('user_type');
      table.boolean('signed_terms');
      table.string('first_name');
      table.boolean('first_name_private');
      table.string('last_name');
      table.boolean('last_name_private');
      table.string('email');
      table.string('username');
      table.string('phone_number');
      table.string('gender');
      table.boolean('gender_private');
      table.string('hometown_city');
      table.boolean('hometown_city_private');
      table.string('hometown_state');
      table.boolean('hometown_state_private');
      table.string('current_city');
      table.boolean('current_city_private');
      table.string('current_state');
      table.boolean('current_state_private');
      table.string('zipcode');
      table.string('education');
      table.boolean('education_private');
      table.string('occupation');
      table.boolean('occupation_private');
      table.string('employment_location');
      table.boolean('employment_location_private');
      table.string('health_groups');
      table.boolean('health_groups_private');
      table.string('dietary_preferences');
      table.boolean('dietary_preferences_private');
      table.string('about');
      table.boolean('about_private');
      table.string('allergies');
      table.boolean('allergies_private');
      table.boolean('has_children');
      table.boolean('has_children_private');
      table.timestamps(true, true);
    }),

    knex.schema.createTable('locations', function(table) {
      table.increments('id').primary();
      table.string('name');
      table.integer('lat');
      table.integer('long');
      table.string('address');
      table.string('suite_or_unit');
      table.string('city');
      table.string('state');
      table.integer('zip');
      table.string('country');
      table.integer('average_star_rating');
      table.boolean('claimed');
      table.string('type');
      table.string('narkons');
      table.string('appropriate_for');
      table.timestamps(true, true);
    }),

    knex.schema.createTable('reviews', function(table) {
      table.increments('id').primary();
      table.string('title');
      table.string('body');
      table.integer('rating');
      table.string('tags');
      table.string('appropriate_for');
      table.string('not_appropriate_for');
      table.integer('likes');
      table.integer('user_id').unsigned()
      table.foreign('user_id')
        .references('users.id');
      table.integer('location_id').unsigned()
      table.foreign('location_id')
        .references('locations.id');
      table.timestamps(true, true);
    })
  ])
};


exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTable('users'),
    knex.schema.dropTable('reviews'),
    knex.schema.dropTable('locations')
  ]);
};
