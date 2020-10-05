import { createApolloFetch } from 'apollo-fetch';

export const apiBaseUrl = process.env.API_BASE_URL ?? 'http://localhost:1337';

export const client = createApolloFetch({
  uri: `${apiBaseUrl}/graphql`,
});
