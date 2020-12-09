# Foursevens Web

## Design assets

The [contact page](http://localhost:3000/contact) map is generated with [Snazzy Maps](https://snazzymaps.com/style/239641/light-blue).

- `design/stories-assets/map.png`
- `site/public/map.png`

## Local Development

### Setup CMS database

Create docker containers to have a Postgres database.

```sh
docker-compose up
```

This only has to be executed once.

### Start CMS database

Start the docker containers.

```sh
docker-compose start --detach
```

### Start development

Install all dependencies.

```sh
yarn install
```

Start development processes.

```sh
yarn dev
```

#### CMS

- [Strapi admin page](http://localhost:1337/admin)
- [GraphQl playground](http://localhost:1337/graphql)

##### CMS Database

- [Database](http://localhost:8080)
  - **System:** PostgreSQL
  - **Server:** db
  - **Username:** strapi
  - **Password:** strapi
  - **Database:** api

#### Design

- [Storybook](http://localhost:6006)

#### Site

- [Foursevens Local](http://localhost:3000)
