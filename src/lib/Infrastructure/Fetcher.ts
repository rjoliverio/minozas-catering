import { client } from './Client'

export const fetcher = (query: string) => client.request(query)
