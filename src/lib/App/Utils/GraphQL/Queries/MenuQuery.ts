import { gql } from 'graphql-request'
export const GET_MENU_QUERY = gql`
  {
    findAll {
      id
      name
      category {
        name
      }
      rate
      image
      description
    }
  }
`
