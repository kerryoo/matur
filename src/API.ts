/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  username: string,
  firstName: string,
  lastName: string,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id: string,
  username: string,
  firstName: string,
  lastName: string,
  favoriteCuisines?: ModelUserCuisineConnection | null,
  savedRecipies?: ModelUserRecipeConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelUserCuisineConnection = {
  __typename: "ModelUserCuisineConnection",
  items?:  Array<UserCuisine | null > | null,
  nextToken?: string | null,
};

export type UserCuisine = {
  __typename: "UserCuisine",
  id: string,
  userID: string,
  cuisineID: string,
  user: User,
  cuisine: Cuisine,
  createdAt: string,
  updatedAt: string,
};

export type Cuisine = {
  __typename: "Cuisine",
  id: string,
  name: string,
  recipes?: ModelRecipeConnection | null,
  users?: ModelUserCuisineConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelRecipeConnection = {
  __typename: "ModelRecipeConnection",
  items?:  Array<Recipe | null > | null,
  nextToken?: string | null,
};

export type Recipe = {
  __typename: "Recipe",
  id: string,
  cuisineID: string,
  cuisine?: Cuisine | null,
  name: string,
  author: User,
  tags: Array< string >,
  activeTime: number,
  totalTime: number,
  ingredients:  Array<Ingredient | null >,
  directions: Array< string | null >,
  servingsLow: number,
  servingsHigh?: number | null,
  favoritesCount: number,
  userFavorites?: ModelUserRecipeConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type Ingredient = {
  __typename: "Ingredient",
  name: string,
  unit: string,
  quantity: number,
};

export type ModelUserRecipeConnection = {
  __typename: "ModelUserRecipeConnection",
  items?:  Array<UserRecipe | null > | null,
  nextToken?: string | null,
};

export type UserRecipe = {
  __typename: "UserRecipe",
  id: string,
  userID: string,
  recipeID: string,
  user: User,
  recipe: Recipe,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  firstName?: string | null,
  lastName?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateUserRecipeInput = {
  id?: string | null,
  userID: string,
  recipeID: string,
};

export type ModelUserRecipeConditionInput = {
  userID?: ModelIDInput | null,
  recipeID?: ModelIDInput | null,
  and?: Array< ModelUserRecipeConditionInput | null > | null,
  or?: Array< ModelUserRecipeConditionInput | null > | null,
  not?: ModelUserRecipeConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateUserRecipeInput = {
  id: string,
  userID?: string | null,
  recipeID?: string | null,
};

export type DeleteUserRecipeInput = {
  id: string,
};

export type CreateRecipeInput = {
  id?: string | null,
  cuisineID: string,
  name: string,
  tags: Array< string >,
  activeTime: number,
  totalTime: number,
  ingredients: Array< IngredientInput | null >,
  directions: Array< string | null >,
  servingsLow: number,
  servingsHigh?: number | null,
  favoritesCount: number,
};

export type IngredientInput = {
  name: string,
  unit: string,
  quantity: number,
};

export type ModelRecipeConditionInput = {
  cuisineID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  activeTime?: ModelIntInput | null,
  totalTime?: ModelIntInput | null,
  directions?: ModelStringInput | null,
  servingsLow?: ModelIntInput | null,
  servingsHigh?: ModelIntInput | null,
  favoritesCount?: ModelIntInput | null,
  and?: Array< ModelRecipeConditionInput | null > | null,
  or?: Array< ModelRecipeConditionInput | null > | null,
  not?: ModelRecipeConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateRecipeInput = {
  id: string,
  cuisineID?: string | null,
  name?: string | null,
  tags?: Array< string > | null,
  activeTime?: number | null,
  totalTime?: number | null,
  ingredients?: Array< IngredientInput | null > | null,
  directions?: Array< string | null > | null,
  servingsLow?: number | null,
  servingsHigh?: number | null,
  favoritesCount?: number | null,
};

export type DeleteRecipeInput = {
  id: string,
};

export type CreateUserCuisineInput = {
  id?: string | null,
  userID: string,
  cuisineID: string,
};

export type ModelUserCuisineConditionInput = {
  userID?: ModelIDInput | null,
  cuisineID?: ModelIDInput | null,
  and?: Array< ModelUserCuisineConditionInput | null > | null,
  or?: Array< ModelUserCuisineConditionInput | null > | null,
  not?: ModelUserCuisineConditionInput | null,
};

export type UpdateUserCuisineInput = {
  id: string,
  userID?: string | null,
  cuisineID?: string | null,
};

export type DeleteUserCuisineInput = {
  id: string,
};

export type CreateCuisineInput = {
  id?: string | null,
  name: string,
};

export type ModelCuisineConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelCuisineConditionInput | null > | null,
  or?: Array< ModelCuisineConditionInput | null > | null,
  not?: ModelCuisineConditionInput | null,
};

export type UpdateCuisineInput = {
  id: string,
  name?: string | null,
};

export type DeleteCuisineInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
};

export type ModelRecipeFilterInput = {
  id?: ModelIDInput | null,
  cuisineID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  activeTime?: ModelIntInput | null,
  totalTime?: ModelIntInput | null,
  directions?: ModelStringInput | null,
  servingsLow?: ModelIntInput | null,
  servingsHigh?: ModelIntInput | null,
  favoritesCount?: ModelIntInput | null,
  and?: Array< ModelRecipeFilterInput | null > | null,
  or?: Array< ModelRecipeFilterInput | null > | null,
  not?: ModelRecipeFilterInput | null,
};

export type ModelCuisineFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelCuisineFilterInput | null > | null,
  or?: Array< ModelCuisineFilterInput | null > | null,
  not?: ModelCuisineFilterInput | null,
};

export type ModelCuisineConnection = {
  __typename: "ModelCuisineConnection",
  items?:  Array<Cuisine | null > | null,
  nextToken?: string | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    username: string,
    firstName: string,
    lastName: string,
    favoriteCuisines?:  {
      __typename: "ModelUserCuisineConnection",
      items?:  Array< {
        __typename: "UserCuisine",
        id: string,
        userID: string,
        cuisineID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    savedRecipies?:  {
      __typename: "ModelUserRecipeConnection",
      items?:  Array< {
        __typename: "UserRecipe",
        id: string,
        userID: string,
        recipeID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    firstName: string,
    lastName: string,
    favoriteCuisines?:  {
      __typename: "ModelUserCuisineConnection",
      items?:  Array< {
        __typename: "UserCuisine",
        id: string,
        userID: string,
        cuisineID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    savedRecipies?:  {
      __typename: "ModelUserRecipeConnection",
      items?:  Array< {
        __typename: "UserRecipe",
        id: string,
        userID: string,
        recipeID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    firstName: string,
    lastName: string,
    favoriteCuisines?:  {
      __typename: "ModelUserCuisineConnection",
      items?:  Array< {
        __typename: "UserCuisine",
        id: string,
        userID: string,
        cuisineID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    savedRecipies?:  {
      __typename: "ModelUserRecipeConnection",
      items?:  Array< {
        __typename: "UserRecipe",
        id: string,
        userID: string,
        recipeID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserRecipeMutationVariables = {
  input: CreateUserRecipeInput,
  condition?: ModelUserRecipeConditionInput | null,
};

export type CreateUserRecipeMutation = {
  createUserRecipe?:  {
    __typename: "UserRecipe",
    id: string,
    userID: string,
    recipeID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      firstName: string,
      lastName: string,
      favoriteCuisines?:  {
        __typename: "ModelUserCuisineConnection",
        nextToken?: string | null,
      } | null,
      savedRecipies?:  {
        __typename: "ModelUserRecipeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    recipe:  {
      __typename: "Recipe",
      id: string,
      cuisineID: string,
      cuisine?:  {
        __typename: "Cuisine",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      name: string,
      author:  {
        __typename: "User",
        id: string,
        username: string,
        firstName: string,
        lastName: string,
        createdAt: string,
        updatedAt: string,
      },
      tags: Array< string >,
      activeTime: number,
      totalTime: number,
      ingredients:  Array< {
        __typename: "Ingredient",
        name: string,
        unit: string,
        quantity: number,
      } | null >,
      directions: Array< string | null >,
      servingsLow: number,
      servingsHigh?: number | null,
      favoritesCount: number,
      userFavorites?:  {
        __typename: "ModelUserRecipeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserRecipeMutationVariables = {
  input: UpdateUserRecipeInput,
  condition?: ModelUserRecipeConditionInput | null,
};

export type UpdateUserRecipeMutation = {
  updateUserRecipe?:  {
    __typename: "UserRecipe",
    id: string,
    userID: string,
    recipeID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      firstName: string,
      lastName: string,
      favoriteCuisines?:  {
        __typename: "ModelUserCuisineConnection",
        nextToken?: string | null,
      } | null,
      savedRecipies?:  {
        __typename: "ModelUserRecipeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    recipe:  {
      __typename: "Recipe",
      id: string,
      cuisineID: string,
      cuisine?:  {
        __typename: "Cuisine",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      name: string,
      author:  {
        __typename: "User",
        id: string,
        username: string,
        firstName: string,
        lastName: string,
        createdAt: string,
        updatedAt: string,
      },
      tags: Array< string >,
      activeTime: number,
      totalTime: number,
      ingredients:  Array< {
        __typename: "Ingredient",
        name: string,
        unit: string,
        quantity: number,
      } | null >,
      directions: Array< string | null >,
      servingsLow: number,
      servingsHigh?: number | null,
      favoritesCount: number,
      userFavorites?:  {
        __typename: "ModelUserRecipeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserRecipeMutationVariables = {
  input: DeleteUserRecipeInput,
  condition?: ModelUserRecipeConditionInput | null,
};

export type DeleteUserRecipeMutation = {
  deleteUserRecipe?:  {
    __typename: "UserRecipe",
    id: string,
    userID: string,
    recipeID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      firstName: string,
      lastName: string,
      favoriteCuisines?:  {
        __typename: "ModelUserCuisineConnection",
        nextToken?: string | null,
      } | null,
      savedRecipies?:  {
        __typename: "ModelUserRecipeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    recipe:  {
      __typename: "Recipe",
      id: string,
      cuisineID: string,
      cuisine?:  {
        __typename: "Cuisine",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      name: string,
      author:  {
        __typename: "User",
        id: string,
        username: string,
        firstName: string,
        lastName: string,
        createdAt: string,
        updatedAt: string,
      },
      tags: Array< string >,
      activeTime: number,
      totalTime: number,
      ingredients:  Array< {
        __typename: "Ingredient",
        name: string,
        unit: string,
        quantity: number,
      } | null >,
      directions: Array< string | null >,
      servingsLow: number,
      servingsHigh?: number | null,
      favoritesCount: number,
      userFavorites?:  {
        __typename: "ModelUserRecipeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateRecipeMutationVariables = {
  input: CreateRecipeInput,
  condition?: ModelRecipeConditionInput | null,
};

export type CreateRecipeMutation = {
  createRecipe?:  {
    __typename: "Recipe",
    id: string,
    cuisineID: string,
    cuisine?:  {
      __typename: "Cuisine",
      id: string,
      name: string,
      recipes?:  {
        __typename: "ModelRecipeConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserCuisineConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    name: string,
    author:  {
      __typename: "User",
      id: string,
      username: string,
      firstName: string,
      lastName: string,
      favoriteCuisines?:  {
        __typename: "ModelUserCuisineConnection",
        nextToken?: string | null,
      } | null,
      savedRecipies?:  {
        __typename: "ModelUserRecipeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    tags: Array< string >,
    activeTime: number,
    totalTime: number,
    ingredients:  Array< {
      __typename: "Ingredient",
      name: string,
      unit: string,
      quantity: number,
    } | null >,
    directions: Array< string | null >,
    servingsLow: number,
    servingsHigh?: number | null,
    favoritesCount: number,
    userFavorites?:  {
      __typename: "ModelUserRecipeConnection",
      items?:  Array< {
        __typename: "UserRecipe",
        id: string,
        userID: string,
        recipeID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRecipeMutationVariables = {
  input: UpdateRecipeInput,
  condition?: ModelRecipeConditionInput | null,
};

export type UpdateRecipeMutation = {
  updateRecipe?:  {
    __typename: "Recipe",
    id: string,
    cuisineID: string,
    cuisine?:  {
      __typename: "Cuisine",
      id: string,
      name: string,
      recipes?:  {
        __typename: "ModelRecipeConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserCuisineConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    name: string,
    author:  {
      __typename: "User",
      id: string,
      username: string,
      firstName: string,
      lastName: string,
      favoriteCuisines?:  {
        __typename: "ModelUserCuisineConnection",
        nextToken?: string | null,
      } | null,
      savedRecipies?:  {
        __typename: "ModelUserRecipeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    tags: Array< string >,
    activeTime: number,
    totalTime: number,
    ingredients:  Array< {
      __typename: "Ingredient",
      name: string,
      unit: string,
      quantity: number,
    } | null >,
    directions: Array< string | null >,
    servingsLow: number,
    servingsHigh?: number | null,
    favoritesCount: number,
    userFavorites?:  {
      __typename: "ModelUserRecipeConnection",
      items?:  Array< {
        __typename: "UserRecipe",
        id: string,
        userID: string,
        recipeID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRecipeMutationVariables = {
  input: DeleteRecipeInput,
  condition?: ModelRecipeConditionInput | null,
};

export type DeleteRecipeMutation = {
  deleteRecipe?:  {
    __typename: "Recipe",
    id: string,
    cuisineID: string,
    cuisine?:  {
      __typename: "Cuisine",
      id: string,
      name: string,
      recipes?:  {
        __typename: "ModelRecipeConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserCuisineConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    name: string,
    author:  {
      __typename: "User",
      id: string,
      username: string,
      firstName: string,
      lastName: string,
      favoriteCuisines?:  {
        __typename: "ModelUserCuisineConnection",
        nextToken?: string | null,
      } | null,
      savedRecipies?:  {
        __typename: "ModelUserRecipeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    tags: Array< string >,
    activeTime: number,
    totalTime: number,
    ingredients:  Array< {
      __typename: "Ingredient",
      name: string,
      unit: string,
      quantity: number,
    } | null >,
    directions: Array< string | null >,
    servingsLow: number,
    servingsHigh?: number | null,
    favoritesCount: number,
    userFavorites?:  {
      __typename: "ModelUserRecipeConnection",
      items?:  Array< {
        __typename: "UserRecipe",
        id: string,
        userID: string,
        recipeID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserCuisineMutationVariables = {
  input: CreateUserCuisineInput,
  condition?: ModelUserCuisineConditionInput | null,
};

export type CreateUserCuisineMutation = {
  createUserCuisine?:  {
    __typename: "UserCuisine",
    id: string,
    userID: string,
    cuisineID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      firstName: string,
      lastName: string,
      favoriteCuisines?:  {
        __typename: "ModelUserCuisineConnection",
        nextToken?: string | null,
      } | null,
      savedRecipies?:  {
        __typename: "ModelUserRecipeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    cuisine:  {
      __typename: "Cuisine",
      id: string,
      name: string,
      recipes?:  {
        __typename: "ModelRecipeConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserCuisineConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserCuisineMutationVariables = {
  input: UpdateUserCuisineInput,
  condition?: ModelUserCuisineConditionInput | null,
};

export type UpdateUserCuisineMutation = {
  updateUserCuisine?:  {
    __typename: "UserCuisine",
    id: string,
    userID: string,
    cuisineID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      firstName: string,
      lastName: string,
      favoriteCuisines?:  {
        __typename: "ModelUserCuisineConnection",
        nextToken?: string | null,
      } | null,
      savedRecipies?:  {
        __typename: "ModelUserRecipeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    cuisine:  {
      __typename: "Cuisine",
      id: string,
      name: string,
      recipes?:  {
        __typename: "ModelRecipeConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserCuisineConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserCuisineMutationVariables = {
  input: DeleteUserCuisineInput,
  condition?: ModelUserCuisineConditionInput | null,
};

export type DeleteUserCuisineMutation = {
  deleteUserCuisine?:  {
    __typename: "UserCuisine",
    id: string,
    userID: string,
    cuisineID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      firstName: string,
      lastName: string,
      favoriteCuisines?:  {
        __typename: "ModelUserCuisineConnection",
        nextToken?: string | null,
      } | null,
      savedRecipies?:  {
        __typename: "ModelUserRecipeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    cuisine:  {
      __typename: "Cuisine",
      id: string,
      name: string,
      recipes?:  {
        __typename: "ModelRecipeConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserCuisineConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCuisineMutationVariables = {
  input: CreateCuisineInput,
  condition?: ModelCuisineConditionInput | null,
};

export type CreateCuisineMutation = {
  createCuisine?:  {
    __typename: "Cuisine",
    id: string,
    name: string,
    recipes?:  {
      __typename: "ModelRecipeConnection",
      items?:  Array< {
        __typename: "Recipe",
        id: string,
        cuisineID: string,
        name: string,
        tags: Array< string >,
        activeTime: number,
        totalTime: number,
        directions: Array< string | null >,
        servingsLow: number,
        servingsHigh?: number | null,
        favoritesCount: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserCuisineConnection",
      items?:  Array< {
        __typename: "UserCuisine",
        id: string,
        userID: string,
        cuisineID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCuisineMutationVariables = {
  input: UpdateCuisineInput,
  condition?: ModelCuisineConditionInput | null,
};

export type UpdateCuisineMutation = {
  updateCuisine?:  {
    __typename: "Cuisine",
    id: string,
    name: string,
    recipes?:  {
      __typename: "ModelRecipeConnection",
      items?:  Array< {
        __typename: "Recipe",
        id: string,
        cuisineID: string,
        name: string,
        tags: Array< string >,
        activeTime: number,
        totalTime: number,
        directions: Array< string | null >,
        servingsLow: number,
        servingsHigh?: number | null,
        favoritesCount: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserCuisineConnection",
      items?:  Array< {
        __typename: "UserCuisine",
        id: string,
        userID: string,
        cuisineID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCuisineMutationVariables = {
  input: DeleteCuisineInput,
  condition?: ModelCuisineConditionInput | null,
};

export type DeleteCuisineMutation = {
  deleteCuisine?:  {
    __typename: "Cuisine",
    id: string,
    name: string,
    recipes?:  {
      __typename: "ModelRecipeConnection",
      items?:  Array< {
        __typename: "Recipe",
        id: string,
        cuisineID: string,
        name: string,
        tags: Array< string >,
        activeTime: number,
        totalTime: number,
        directions: Array< string | null >,
        servingsLow: number,
        servingsHigh?: number | null,
        favoritesCount: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserCuisineConnection",
      items?:  Array< {
        __typename: "UserCuisine",
        id: string,
        userID: string,
        cuisineID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    username: string,
    firstName: string,
    lastName: string,
    favoriteCuisines?:  {
      __typename: "ModelUserCuisineConnection",
      items?:  Array< {
        __typename: "UserCuisine",
        id: string,
        userID: string,
        cuisineID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    savedRecipies?:  {
      __typename: "ModelUserRecipeConnection",
      items?:  Array< {
        __typename: "UserRecipe",
        id: string,
        userID: string,
        recipeID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      username: string,
      firstName: string,
      lastName: string,
      favoriteCuisines?:  {
        __typename: "ModelUserCuisineConnection",
        nextToken?: string | null,
      } | null,
      savedRecipies?:  {
        __typename: "ModelUserRecipeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetRecipeQueryVariables = {
  id: string,
};

export type GetRecipeQuery = {
  getRecipe?:  {
    __typename: "Recipe",
    id: string,
    cuisineID: string,
    cuisine?:  {
      __typename: "Cuisine",
      id: string,
      name: string,
      recipes?:  {
        __typename: "ModelRecipeConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserCuisineConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    name: string,
    author:  {
      __typename: "User",
      id: string,
      username: string,
      firstName: string,
      lastName: string,
      favoriteCuisines?:  {
        __typename: "ModelUserCuisineConnection",
        nextToken?: string | null,
      } | null,
      savedRecipies?:  {
        __typename: "ModelUserRecipeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    tags: Array< string >,
    activeTime: number,
    totalTime: number,
    ingredients:  Array< {
      __typename: "Ingredient",
      name: string,
      unit: string,
      quantity: number,
    } | null >,
    directions: Array< string | null >,
    servingsLow: number,
    servingsHigh?: number | null,
    favoritesCount: number,
    userFavorites?:  {
      __typename: "ModelUserRecipeConnection",
      items?:  Array< {
        __typename: "UserRecipe",
        id: string,
        userID: string,
        recipeID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRecipesQueryVariables = {
  filter?: ModelRecipeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRecipesQuery = {
  listRecipes?:  {
    __typename: "ModelRecipeConnection",
    items?:  Array< {
      __typename: "Recipe",
      id: string,
      cuisineID: string,
      cuisine?:  {
        __typename: "Cuisine",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      name: string,
      author:  {
        __typename: "User",
        id: string,
        username: string,
        firstName: string,
        lastName: string,
        createdAt: string,
        updatedAt: string,
      },
      tags: Array< string >,
      activeTime: number,
      totalTime: number,
      ingredients:  Array< {
        __typename: "Ingredient",
        name: string,
        unit: string,
        quantity: number,
      } | null >,
      directions: Array< string | null >,
      servingsLow: number,
      servingsHigh?: number | null,
      favoritesCount: number,
      userFavorites?:  {
        __typename: "ModelUserRecipeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetCuisineQueryVariables = {
  id: string,
};

export type GetCuisineQuery = {
  getCuisine?:  {
    __typename: "Cuisine",
    id: string,
    name: string,
    recipes?:  {
      __typename: "ModelRecipeConnection",
      items?:  Array< {
        __typename: "Recipe",
        id: string,
        cuisineID: string,
        name: string,
        tags: Array< string >,
        activeTime: number,
        totalTime: number,
        directions: Array< string | null >,
        servingsLow: number,
        servingsHigh?: number | null,
        favoritesCount: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserCuisineConnection",
      items?:  Array< {
        __typename: "UserCuisine",
        id: string,
        userID: string,
        cuisineID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCuisinesQueryVariables = {
  filter?: ModelCuisineFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCuisinesQuery = {
  listCuisines?:  {
    __typename: "ModelCuisineConnection",
    items?:  Array< {
      __typename: "Cuisine",
      id: string,
      name: string,
      recipes?:  {
        __typename: "ModelRecipeConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserCuisineConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    firstName: string,
    lastName: string,
    favoriteCuisines?:  {
      __typename: "ModelUserCuisineConnection",
      items?:  Array< {
        __typename: "UserCuisine",
        id: string,
        userID: string,
        cuisineID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    savedRecipies?:  {
      __typename: "ModelUserRecipeConnection",
      items?:  Array< {
        __typename: "UserRecipe",
        id: string,
        userID: string,
        recipeID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    firstName: string,
    lastName: string,
    favoriteCuisines?:  {
      __typename: "ModelUserCuisineConnection",
      items?:  Array< {
        __typename: "UserCuisine",
        id: string,
        userID: string,
        cuisineID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    savedRecipies?:  {
      __typename: "ModelUserRecipeConnection",
      items?:  Array< {
        __typename: "UserRecipe",
        id: string,
        userID: string,
        recipeID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    firstName: string,
    lastName: string,
    favoriteCuisines?:  {
      __typename: "ModelUserCuisineConnection",
      items?:  Array< {
        __typename: "UserCuisine",
        id: string,
        userID: string,
        cuisineID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    savedRecipies?:  {
      __typename: "ModelUserRecipeConnection",
      items?:  Array< {
        __typename: "UserRecipe",
        id: string,
        userID: string,
        recipeID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserRecipeSubscription = {
  onCreateUserRecipe?:  {
    __typename: "UserRecipe",
    id: string,
    userID: string,
    recipeID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      firstName: string,
      lastName: string,
      favoriteCuisines?:  {
        __typename: "ModelUserCuisineConnection",
        nextToken?: string | null,
      } | null,
      savedRecipies?:  {
        __typename: "ModelUserRecipeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    recipe:  {
      __typename: "Recipe",
      id: string,
      cuisineID: string,
      cuisine?:  {
        __typename: "Cuisine",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      name: string,
      author:  {
        __typename: "User",
        id: string,
        username: string,
        firstName: string,
        lastName: string,
        createdAt: string,
        updatedAt: string,
      },
      tags: Array< string >,
      activeTime: number,
      totalTime: number,
      ingredients:  Array< {
        __typename: "Ingredient",
        name: string,
        unit: string,
        quantity: number,
      } | null >,
      directions: Array< string | null >,
      servingsLow: number,
      servingsHigh?: number | null,
      favoritesCount: number,
      userFavorites?:  {
        __typename: "ModelUserRecipeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserRecipeSubscription = {
  onUpdateUserRecipe?:  {
    __typename: "UserRecipe",
    id: string,
    userID: string,
    recipeID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      firstName: string,
      lastName: string,
      favoriteCuisines?:  {
        __typename: "ModelUserCuisineConnection",
        nextToken?: string | null,
      } | null,
      savedRecipies?:  {
        __typename: "ModelUserRecipeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    recipe:  {
      __typename: "Recipe",
      id: string,
      cuisineID: string,
      cuisine?:  {
        __typename: "Cuisine",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      name: string,
      author:  {
        __typename: "User",
        id: string,
        username: string,
        firstName: string,
        lastName: string,
        createdAt: string,
        updatedAt: string,
      },
      tags: Array< string >,
      activeTime: number,
      totalTime: number,
      ingredients:  Array< {
        __typename: "Ingredient",
        name: string,
        unit: string,
        quantity: number,
      } | null >,
      directions: Array< string | null >,
      servingsLow: number,
      servingsHigh?: number | null,
      favoritesCount: number,
      userFavorites?:  {
        __typename: "ModelUserRecipeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserRecipeSubscription = {
  onDeleteUserRecipe?:  {
    __typename: "UserRecipe",
    id: string,
    userID: string,
    recipeID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      firstName: string,
      lastName: string,
      favoriteCuisines?:  {
        __typename: "ModelUserCuisineConnection",
        nextToken?: string | null,
      } | null,
      savedRecipies?:  {
        __typename: "ModelUserRecipeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    recipe:  {
      __typename: "Recipe",
      id: string,
      cuisineID: string,
      cuisine?:  {
        __typename: "Cuisine",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      name: string,
      author:  {
        __typename: "User",
        id: string,
        username: string,
        firstName: string,
        lastName: string,
        createdAt: string,
        updatedAt: string,
      },
      tags: Array< string >,
      activeTime: number,
      totalTime: number,
      ingredients:  Array< {
        __typename: "Ingredient",
        name: string,
        unit: string,
        quantity: number,
      } | null >,
      directions: Array< string | null >,
      servingsLow: number,
      servingsHigh?: number | null,
      favoritesCount: number,
      userFavorites?:  {
        __typename: "ModelUserRecipeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRecipeSubscription = {
  onCreateRecipe?:  {
    __typename: "Recipe",
    id: string,
    cuisineID: string,
    cuisine?:  {
      __typename: "Cuisine",
      id: string,
      name: string,
      recipes?:  {
        __typename: "ModelRecipeConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserCuisineConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    name: string,
    author:  {
      __typename: "User",
      id: string,
      username: string,
      firstName: string,
      lastName: string,
      favoriteCuisines?:  {
        __typename: "ModelUserCuisineConnection",
        nextToken?: string | null,
      } | null,
      savedRecipies?:  {
        __typename: "ModelUserRecipeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    tags: Array< string >,
    activeTime: number,
    totalTime: number,
    ingredients:  Array< {
      __typename: "Ingredient",
      name: string,
      unit: string,
      quantity: number,
    } | null >,
    directions: Array< string | null >,
    servingsLow: number,
    servingsHigh?: number | null,
    favoritesCount: number,
    userFavorites?:  {
      __typename: "ModelUserRecipeConnection",
      items?:  Array< {
        __typename: "UserRecipe",
        id: string,
        userID: string,
        recipeID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRecipeSubscription = {
  onUpdateRecipe?:  {
    __typename: "Recipe",
    id: string,
    cuisineID: string,
    cuisine?:  {
      __typename: "Cuisine",
      id: string,
      name: string,
      recipes?:  {
        __typename: "ModelRecipeConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserCuisineConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    name: string,
    author:  {
      __typename: "User",
      id: string,
      username: string,
      firstName: string,
      lastName: string,
      favoriteCuisines?:  {
        __typename: "ModelUserCuisineConnection",
        nextToken?: string | null,
      } | null,
      savedRecipies?:  {
        __typename: "ModelUserRecipeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    tags: Array< string >,
    activeTime: number,
    totalTime: number,
    ingredients:  Array< {
      __typename: "Ingredient",
      name: string,
      unit: string,
      quantity: number,
    } | null >,
    directions: Array< string | null >,
    servingsLow: number,
    servingsHigh?: number | null,
    favoritesCount: number,
    userFavorites?:  {
      __typename: "ModelUserRecipeConnection",
      items?:  Array< {
        __typename: "UserRecipe",
        id: string,
        userID: string,
        recipeID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRecipeSubscription = {
  onDeleteRecipe?:  {
    __typename: "Recipe",
    id: string,
    cuisineID: string,
    cuisine?:  {
      __typename: "Cuisine",
      id: string,
      name: string,
      recipes?:  {
        __typename: "ModelRecipeConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserCuisineConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    name: string,
    author:  {
      __typename: "User",
      id: string,
      username: string,
      firstName: string,
      lastName: string,
      favoriteCuisines?:  {
        __typename: "ModelUserCuisineConnection",
        nextToken?: string | null,
      } | null,
      savedRecipies?:  {
        __typename: "ModelUserRecipeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    tags: Array< string >,
    activeTime: number,
    totalTime: number,
    ingredients:  Array< {
      __typename: "Ingredient",
      name: string,
      unit: string,
      quantity: number,
    } | null >,
    directions: Array< string | null >,
    servingsLow: number,
    servingsHigh?: number | null,
    favoritesCount: number,
    userFavorites?:  {
      __typename: "ModelUserRecipeConnection",
      items?:  Array< {
        __typename: "UserRecipe",
        id: string,
        userID: string,
        recipeID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserCuisineSubscription = {
  onCreateUserCuisine?:  {
    __typename: "UserCuisine",
    id: string,
    userID: string,
    cuisineID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      firstName: string,
      lastName: string,
      favoriteCuisines?:  {
        __typename: "ModelUserCuisineConnection",
        nextToken?: string | null,
      } | null,
      savedRecipies?:  {
        __typename: "ModelUserRecipeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    cuisine:  {
      __typename: "Cuisine",
      id: string,
      name: string,
      recipes?:  {
        __typename: "ModelRecipeConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserCuisineConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserCuisineSubscription = {
  onUpdateUserCuisine?:  {
    __typename: "UserCuisine",
    id: string,
    userID: string,
    cuisineID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      firstName: string,
      lastName: string,
      favoriteCuisines?:  {
        __typename: "ModelUserCuisineConnection",
        nextToken?: string | null,
      } | null,
      savedRecipies?:  {
        __typename: "ModelUserRecipeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    cuisine:  {
      __typename: "Cuisine",
      id: string,
      name: string,
      recipes?:  {
        __typename: "ModelRecipeConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserCuisineConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserCuisineSubscription = {
  onDeleteUserCuisine?:  {
    __typename: "UserCuisine",
    id: string,
    userID: string,
    cuisineID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      firstName: string,
      lastName: string,
      favoriteCuisines?:  {
        __typename: "ModelUserCuisineConnection",
        nextToken?: string | null,
      } | null,
      savedRecipies?:  {
        __typename: "ModelUserRecipeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    cuisine:  {
      __typename: "Cuisine",
      id: string,
      name: string,
      recipes?:  {
        __typename: "ModelRecipeConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserCuisineConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCuisineSubscription = {
  onCreateCuisine?:  {
    __typename: "Cuisine",
    id: string,
    name: string,
    recipes?:  {
      __typename: "ModelRecipeConnection",
      items?:  Array< {
        __typename: "Recipe",
        id: string,
        cuisineID: string,
        name: string,
        tags: Array< string >,
        activeTime: number,
        totalTime: number,
        directions: Array< string | null >,
        servingsLow: number,
        servingsHigh?: number | null,
        favoritesCount: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserCuisineConnection",
      items?:  Array< {
        __typename: "UserCuisine",
        id: string,
        userID: string,
        cuisineID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCuisineSubscription = {
  onUpdateCuisine?:  {
    __typename: "Cuisine",
    id: string,
    name: string,
    recipes?:  {
      __typename: "ModelRecipeConnection",
      items?:  Array< {
        __typename: "Recipe",
        id: string,
        cuisineID: string,
        name: string,
        tags: Array< string >,
        activeTime: number,
        totalTime: number,
        directions: Array< string | null >,
        servingsLow: number,
        servingsHigh?: number | null,
        favoritesCount: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserCuisineConnection",
      items?:  Array< {
        __typename: "UserCuisine",
        id: string,
        userID: string,
        cuisineID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCuisineSubscription = {
  onDeleteCuisine?:  {
    __typename: "Cuisine",
    id: string,
    name: string,
    recipes?:  {
      __typename: "ModelRecipeConnection",
      items?:  Array< {
        __typename: "Recipe",
        id: string,
        cuisineID: string,
        name: string,
        tags: Array< string >,
        activeTime: number,
        totalTime: number,
        directions: Array< string | null >,
        servingsLow: number,
        servingsHigh?: number | null,
        favoritesCount: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserCuisineConnection",
      items?:  Array< {
        __typename: "UserCuisine",
        id: string,
        userID: string,
        cuisineID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
