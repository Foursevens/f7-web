# Foursevens Web

## Local Development

### Setup CMS

Create an environment config file at `.env.local`.

```ini
DATABASE_CLIENT=postgres
DATABASE_HOST=db
DATABASE_NAME=api
DATABASE_PASSWORD=[anything-you-like]
DATABASE_PORT=5432
DATABASE_USERNAME=strapi
POSTGRES_DB=${DATABASE_NAME}
POSTGRES_PASSWORD=${DATABASE_PASSWORD}
POSTGRES_USER=${DATABASE_USERNAME}
```

Create docker containers.

```sh
docker-compose up
```

Wait for all containers to initialise. This can take up to 10 minutes.

### Start CMS

Start the docker containers.

```sh
docker-compose start --detach
```

Wait for all containers to start. This can take up to a minute. Then you can go to various of the CMS pages.

- [Strapi admin page](http://localhost:1337/admin)
- [GraphQl playground](http://localhost:1337/graphql)

### Start Design Storybook

```sh
yarn design dev
```

#### Compile Design

Next.js can only use the compiled assets of our design. When working on the design / site you should enable the component builder in watch mode.

```sh
yarn design build:components --watch
```

### Start Site

```sh
yarn site dev
```
