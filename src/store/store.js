import Vue from 'vue';
import Vuex from 'vuex';
import {recipesDefaults} from './recipes-defaults.js';
import {ingredientsDefaults} from './ingredients-defaults.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        recipes: recipesDefaults,
        shoppingList: ingredientsDefaults
    },
    getters: {
        getRecipes: state => {
            return state.recipes;
        },
        getShoppingList: state => {
            return state.shoppingList;
        }

    },
    mutations: { //todo add a save or update option
        updateRecipe: (state, payload) =>  {
            state.recipes[payload.index] = payload.recipe;
        },
        addRecipe: (state, recipe) =>  {
            state.recipes.push(recipe);
            // console.log("store add recipe");
        }, 
        deleteRecipe: (state, index) =>  {
            state.recipes.splice(index, 1);
        }, 
        addShoppingIngredient: (state, ingredient) =>  {
            state.shoppingList.push(ingredient);
        },
        deleteShoppingIngredient: (state, index) =>  {
            state.shoppingList.splice(index, 1);
        },
        ImportIngredients: (state, ingredients) =>  {
            ingredients.forEach(element => {
                state.shoppingList.push(element);
            });
        }

    }
});
