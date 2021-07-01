/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateUserRecipe = /* GraphQL */ `
  subscription OnCreateUserRecipe {
    onCreateUserRecipe {
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
export const onUpdateUserRecipe = /* GraphQL */ `
  subscription OnUpdateUserRecipe {
    onUpdateUserRecipe {
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
export const onDeleteUserRecipe = /* GraphQL */ `
  subscription OnDeleteUserRecipe {
    onDeleteUserRecipe {
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
export const onCreateRecipe = /* GraphQL */ `
  subscription OnCreateRecipe {
    onCreateRecipe {
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
export const onUpdateRecipe = /* GraphQL */ `
  subscription OnUpdateRecipe {
    onUpdateRecipe {
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
export const onDeleteRecipe = /* GraphQL */ `
  subscription OnDeleteRecipe {
    onDeleteRecipe {
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
export const onCreateUserCuisine = /* GraphQL */ `
  subscription OnCreateUserCuisine {
    onCreateUserCuisine {
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
export const onUpdateUserCuisine = /* GraphQL */ `
  subscription OnUpdateUserCuisine {
    onUpdateUserCuisine {
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
export const onDeleteUserCuisine = /* GraphQL */ `
  subscription OnDeleteUserCuisine {
    onDeleteUserCuisine {
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
export const onCreateCuisine = /* GraphQL */ `
  subscription OnCreateCuisine {
    onCreateCuisine {
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
export const onUpdateCuisine = /* GraphQL */ `
  subscription OnUpdateCuisine {
    onUpdateCuisine {
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
export const onDeleteCuisine = /* GraphQL */ `
  subscription OnDeleteCuisine {
    onDeleteCuisine {
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
