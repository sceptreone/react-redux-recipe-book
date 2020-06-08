import { GET_RECIPES } from '../actions/type';

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
        default:
            return state;
    }
}