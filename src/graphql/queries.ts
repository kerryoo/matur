/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      firstName
      lastName
      favoriteCuisines {
        items {
          id
          userID
          cuisineID
          createdAt
          updatedAt
        }
        nextToken
      }
      savedRecipies {
        items {
          id
          userID
          recipeID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        firstName
        lastName
        favoriteCuisines {
          nextToken
        }
        savedRecipies {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRecipe = /* GraphQL */ `
  query GetRecipe($id: ID!) {
    getRecipe(id: $id) {
      id
      cuisineID
      cuisine {
        id
        name
        recipes {
          nextToken
        }
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      name
      author {
        id
        username
        firstName
        lastName
        favoriteCuisines {
          nextToken
        }
        savedRecipies {
          nextToken
        }
        createdAt
        updatedAt
      }
      tags
      activeTime
      totalTime
      ingredients {
        name
        unit
        quantity
      }
      directions
      servingsLow
      servingsHigh
      favoritesCount
      userFavorites {
        items {
          id
          userID
          recipeID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listRecipes = /* GraphQL */ `
  query ListRecipes(
    $filter: ModelRecipeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecipes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        cuisineID
        cuisine {
          id
          name
          createdAt
          updatedAt
        }
        name
        author {
          id
          username
          firstName
          lastName
          createdAt
          updatedAt
        }
        tags
        activeTime
        totalTime
        ingredients {
          name
          unit
          quantity
        }
        directions
        servingsLow
        servingsHigh
        favoritesCount
        userFavorites {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCuisine = /* GraphQL */ `
  query GetCuisine($id: ID!) {
    getCuisine(id: $id) {
      id
      name
      recipes {
        items {
          id
          cuisineID
          name
          tags
          activeTime
          totalTime
          directions
          servingsLow
          servingsHigh
          favoritesCount
          createdAt
          updatedAt
        }
        nextToken
      }
      users {
        items {
          id
          userID
          cuisineID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCuisines = /* GraphQL */ `
  query ListCuisines(
    $filter: ModelCuisineFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCuisines(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        recipes {
          nextToken
        }
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
