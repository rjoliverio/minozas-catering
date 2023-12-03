import { gql } from 'graphql-request'
export const GET_MENU_QUERY = gql`
  query ($category: String!, $searchQuery: String!) {
    findAllFood(category: $category, searchQuery: $searchQuery) {
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

export const GET_CATEGORY_QUERY = gql`
  {
    findAllCategory {
      id
      name
    }
  }
`
