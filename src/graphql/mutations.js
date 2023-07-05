/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createClothingItem = /* GraphQL */ `
  mutation CreateClothingItem(
    $input: CreateClothingItemInput!
    $condition: ModelClothingItemConditionInput
  ) {
    createClothingItem(input: $input, condition: $condition) {
      id
      name
      num_of_purchases
      createdAt
      updatedAt
    }
  }
`;
export const updateClothingItem = /* GraphQL */ `
  mutation UpdateClothingItem(
    $input: UpdateClothingItemInput!
    $condition: ModelClothingItemConditionInput
  ) {
    updateClothingItem(input: $input, condition: $condition) {
      id
      name
      num_of_purchases
      createdAt
      updatedAt
    }
  }
`;
export const deleteClothingItem = /* GraphQL */ `
  mutation DeleteClothingItem(
    $input: DeleteClothingItemInput!
    $condition: ModelClothingItemConditionInput
  ) {
    deleteClothingItem(input: $input, condition: $condition) {
      id
      name
      num_of_purchases
      createdAt
      updatedAt
    }
  }
`;
