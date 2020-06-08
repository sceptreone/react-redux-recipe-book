import { GET_RECIPES, DELETE_RECIPE, ADD_RECIPE } from './types';

export const getRecipes = () => {
    return {
        type: GET_RECIPES
    };
};

export const deleteRecipe = (id) => {
    return {
        type: DELETE_RECIPE,
        payload: id
    };
};

export const addRecipe = (recipe) => {
    return {
        type: ADD_RECIPE,
        payload: recipe
    };
};