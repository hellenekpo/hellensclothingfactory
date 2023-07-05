/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getClothingItem = /* GraphQL */ `
  query GetClothingItem($id: ID!) {
    getClothingItem(id: $id) {
      id
      name
      num_of_purchases
      createdAt
      updatedAt
    }
  }
`;
export const listClothingItems = /* GraphQL */ `
  query ListClothingItems(
    $filter: ModelClothingItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClothingItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        num_of_purchases
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
