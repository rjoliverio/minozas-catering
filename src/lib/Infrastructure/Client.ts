import { GraphQLClient } from 'graphql-request'

export const client = new GraphQLClient(process.env.NEXT_PUBLIC_sERVER_URL as string)
