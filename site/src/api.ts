import { gql, GraphQLClient } from 'graphql-request';

export const apiBaseUrl = process.env.API_BASE_URL ?? 'http://localhost:1337';

export const client = new GraphQLClient(`${apiBaseUrl}/graphql`);

export { gql };
