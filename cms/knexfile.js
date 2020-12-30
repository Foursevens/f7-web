'use strict';

const strapi = require('strapi');

const { DATABASE_URL } = process.env;

function getStrapiConnection() {
  const { config } = strapi({ serveAdminPanel: false });
  const { database } = config;
  const { settings } = database.connections[database.defaultConnection];
  return { ...settings, user: settings.username };
}

module.exports = {
  client: 'pg',
  connection: DATABASE_URL ?? getStrapiConnection(),
  pool: { min: 2, max: 10 },
  migrations: { tableName: 'knex-migrations' },
};
