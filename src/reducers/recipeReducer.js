import { GET_RECIPES, DELETE_RECIPE, ADD_RECIPE } from '../actions/types';

const initialState = {
    recipes: [
        {
            id: 1,
            name:'Green Egg Omellete',
            ingredients: 'Egg, Tomato, Green Chili',
            method: 'Cook an egg'
        },
        {
            id: 2,
            name:'Red Egg Omellete',
            ingredients: 'Egg, Tomato, Red Chili',
            method: 'Cook an egg'
        },
        {
            id: 3,
            name:'Blue Egg Omellete',
            ingredients: 'Egg, Tomato, Blue Chili',
            method: 'Cook an egg'
        }
    ]
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_RECIPES:
            return {
                ...state
            };
        case DELETE_RECIPE:
            return {
                ...state,
                recipes: state.recipes.filter(recipe => recipe.id !== action.payload)
            }
        case ADD_RECIPE:
            return {
                ...state,
                recipes: [action.payload, ...state.recipes]
            } 
        default:
            return state;
    }
}