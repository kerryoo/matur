/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createUserRecipe = /* GraphQL */ `
  mutation CreateUserRecipe(
    $input: CreateUserRecipeInput!
    $condition: ModelUserRecipeConditionInput
  ) {
    createUserRecipe(input: $input, condition: $condition) {
      id
      userID
      recipeID
      user {
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
      recipe {
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
      createdAt
      updatedAt
    }
  }
`;
export const updateUserRecipe = /* GraphQL */ `
  mutation UpdateUserRecipe(
    $input: UpdateUserRecipeInput!
    $condition: ModelUserRecipeConditionInput
  ) {
    updateUserRecipe(input: $input, condition: $condition) {
      id
      userID
      recipeID
      user {
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
      recipe {
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
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserRecipe = /* GraphQL */ `
  mutation DeleteUserRecipe(
    $input: DeleteUserRecipeInput!
    $condition: ModelUserRecipeConditionInput
  ) {
    deleteUserRecipe(input: $input, condition: $condition) {
      id
      userID
      recipeID
      user {
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
      recipe {
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
      createdAt
      updatedAt
    }
  }
`;
export const createRecipe = /* GraphQL */ `
  mutation CreateRecipe(
    $input: CreateRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    createRecipe(input: $input, condition: $condition) {
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
export const updateRecipe = /* GraphQL */ `
  mutation UpdateRecipe(
    $input: UpdateRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    updateRecipe(input: $input, condition: $condition) {
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
export const deleteRecipe = /* GraphQL */ `
  mutation DeleteRecipe(
    $input: DeleteRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    deleteRecipe(input: $input, condition: $condition) {
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
export const createUserCuisine = /* GraphQL */ `
  mutation CreateUserCuisine(
    $input: CreateUserCuisineInput!
    $condition: ModelUserCuisineConditionInput
  ) {
    createUserCuisine(input: $input, condition: $condition) {
      id
      userID
      cuisineID
      user {
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
      createdAt
      updatedAt
    }
  }
`;
export const updateUserCuisine = /* GraphQL */ `
  mutation UpdateUserCuisine(
    $input: UpdateUserCuisineInput!
    $condition: ModelUserCuisineConditionInput
  ) {
    updateUserCuisine(input: $input, condition: $condition) {
      id
      userID
      cuisineID
      user {
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
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserCuisine = /* GraphQL */ `
  mutation DeleteUserCuisine(
    $input: DeleteUserCuisineInput!
    $condition: ModelUserCuisineConditionInput
  ) {
    deleteUserCuisine(input: $input, condition: $condition) {
      id
      userID
      cuisineID
      user {
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
      createdAt
      updatedAt
    }
  }
`;
export const createCuisine = /* GraphQL */ `
  mutation CreateCuisine(
    $input: CreateCuisineInput!
    $condition: ModelCuisineConditionInput
  ) {
    createCuisine(input: $input, condition: $condition) {
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
export const updateCuisine = /* GraphQL */ `
  mutation UpdateCuisine(
    $input: UpdateCuisineInput!
    $condition: ModelCuisineConditionInput
  ) {
    updateCuisine(input: $input, condition: $condition) {
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
export const deleteCuisine = /* GraphQL */ `
  mutation DeleteCuisine(
    $input: DeleteCuisineInput!
    $condition: ModelCuisineConditionInput
  ) {
    deleteCuisine(input: $input, condition: $condition) {
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
