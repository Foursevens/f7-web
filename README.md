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

#### Design

- [Storybook](http://localhost:6006)

#### Site

- [Foursevens Local](http://localhost:3000)
