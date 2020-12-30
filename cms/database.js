'use strict';

const DEFAULT_DATABASE_PORT = 5432;

const settings = {
  client: 'postgres',
  host: `${process.env.DATABASE_HOST ?? '127.0.0.1'}`,
  port: `${process.env.DATABASE_PORT ?? DEFAULT_DATABASE_PORT}`,
  database: `${process.env.DATABASE_NAME ?? 'api'}`,
  username: `${process.env.DATABASE_USERNAME ?? 'postgres'}`,
  password: `${process.env.DATABASE_PASSWORD ?? 'postgres'}`,
};

if (process.env.DATABASE_URL != null) {
  const databaseUrl = new URL(process.env.DATABASE_URL, true);
  settings.host = databaseUrl.hostname;
  settings.port = Number(databaseUrl.port);
  settings.database = databaseUrl.pathname.slice(1);
  settings.username = databaseUrl.username;
  settings.password = databaseUrl.password;
  settings.ssl =
    process.env.DATABASE_SSL == null
      ? { rejectUnauthorized: false }
      : JSON.parse(process.env.DATABASE_SSL);
}

module.exports = {
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings,
      options: {
        useNullAsDefault: true,
        pool: { acquireTimeoutMillis: 10000, createTimeoutMillis: 10000 },
      },
    },
  },
};

console.dir(module.exports);
