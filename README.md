# Foursevens Web

## Local Development

### Setup CMS database

Create docker containers to have a Postgres database.

```sh
docker-compose up
```

### Start CMS database

Start the docker containers.

```sh
docker-compose start --detach
```

### Start CMS

```sh
yarn cms start
```

These are the various CMS pages.

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
