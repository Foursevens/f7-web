# Foursevens Web

## Local Development

### Setup CMS

Create an environment config file at `.env.local`.

```ini
DATABASE_CLIENT=postgres
DATABASE_HOST=db
DATABASE_NAME=api
DATABASE_PASSWORD=strapi
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

Wait for all containers to start. This can take up to a minute. Go the the [CMS page](http://localhost:1337).

### Start Design Storybook

```sh
yarn workspace @f7-web/design storybook
```

### Start Site

```sh
yarn workspace @f7-web/site dev
```
