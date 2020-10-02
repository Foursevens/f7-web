'use strict';

module.exports = ({ env }) => ({
  graphql: {
    endpoint: '/graphql',
    shadowCRUD: true,
  },
  upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: env('AWS_ACCESS_KEY_ID'),
      secretAccessKey: env('AWS_ACCESS_SECRET'),
      region: 'eu-west-1',
      params: {
        Bucket: env('AWS_UPLOAD_S3_BUCKET_NAME'),
      },
    },
  },
});
