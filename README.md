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

### Configure CMS

The media library uploads go to an AWS S3 bucket which needs to be configured before starting the application.

Create `cms/.env` file.

```sh
AWS_ACCESS_KEY_ID=""
AWS_ACCESS_SECRET=""
AWS_UPLOAD_S3_BUCKET_NAME="f7-web-upload-local"
```

### Start development

Install all dependencies.

```sh
yarn install
```

We will automatically start all processes on post-install with pm2.

#### CMS

- [Strapi admin page](http://localhost:1337/admin)
- [GraphQl playground](http://localhost:1337/graphql)

#### Design

- [Storybook](http://localhost:6006)

#### Site

- [Foursevens Local](http://localhost:3000)
