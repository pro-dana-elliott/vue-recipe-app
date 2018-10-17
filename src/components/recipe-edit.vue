<template>
    <div>
        <form id="edit-recipe">
            <button type="button" id="save" class="btn btn-ok" @click.prevent="saveRecipe"
            :disabled="$v.recipe.$invalid">Save</button>
            <button type="button" id="cancel" class="btn btn-no" @click.prevent="cancelRecipe">Cancel</button>
            <div class="from-group" :class="{invalid: $v.recipe.name.$error }" >
                <label for="name" class="label-cus">Recipe Name</label>
                <div class="error" v-if="$v.recipe.name.$error">Field is required</div>
                <input type="text" id="name" class="input-text" v-model="recipe.name" 
                 @blur="$v.recipe.name.$touch()">
            </div>
            <div class="from-group">
                <label for="imagePath" class="label-cus">Image URL</label>
                <input type="text" id="imagePath" class="input-text" v-model="recipe.imagePath">
            </div>
            <div class="image">
                <img :src="recipe.imagePath" alt="" class="img-responsive">
            </div>
            <div class="from-group">
                <label for="description" class="label-cus">Description</label>
                <textarea type="text" id="description" class="input-textarea" rows="6" v-model="recipe.description" ></textarea>
            </div>
             <div id="ingredients-edit">
                 <div class="ingredients-edit__item" v-if="recipe.ingredients.length>0">
                    <div class="label-cus">Ingredient Name</div>
                    <div class="label-cus">Ingredient Amount</div>
                 </div> 
                <div v-for="(ingredient, index) in $v.recipe.ingredients.$each.$iter" :key="index" class="ingredients-edit__item" >
                    <div class="from-group" :class="{invalid: ingredient.name.$error}">
                        <div class="error" v-if="ingredient.name.$error">Field is required.</div>
                        <input type="text" class="input-text" v-model="ingredient.name.$model" @blur="ingredient.name.$touch()">
                    </div>
                    <div class="from-group" :class="{invalid: ingredient.amount.$error}">
                        <div class="error" v-if="!ingredient.amount.required">Field is required.</div>
                        <div class="error" v-else-if="!ingredient.amount.minValue">Minimum value is 1.</div>
                        <input type="number" class="input-text" v-model="ingredient.amount.$model" @blur="ingredient.amount.$touch()">
                    </div>
                    <button type="button" class="btn btn-no" @click="deleteIngredient(index)">X</button> 
                </div>
                <hr>
                <button type="button" class="btn btn-ok" @click="addIngredient">Add Ingredient</button>
            </div>
        </form>
    </div>
</template>

<script>
import { required, minValue } from 'vuelidate/lib/validators'
export default {
    props: {
        'isEdit' : {
            type: Boolean,
            default: false
        },
        'recipe': {
            type: Object
        }

    },
    methods: {
        saveRecipe() {
            this.$emit('EditSaved');
        },
        cancelRecipe() {
            this.$emit('EditCanceled');
        },
        addIngredient() {
            var ing = {name: '', amount: 1}
            this.recipe.ingredients.push(ing);
        },
        deleteIngredient(index) {
            this.recipe.ingredients.splice(index,1);
        }
    },
    validations: {
        recipe : {
            name: { required },
            description: {},
            imagePath: {},
            ingredients: {
                $each:{
                    name: { required },
                    amount: { required, minValue: minValue(1) }  
                }
            } 
        }
    }
}   
</script>

<style scoped>
    #edit-recipe {
        margin-top: 0.625rem;
    }

    .edit-recipe button {
        margin-top: 1.25rem;
    }

    .image img {
        margin-top: 0.5rem;
    }

    .ingredients-edit {
        margin-top: 3.125rem;
    }

    .ingredients-edit__item {
        display:grid;
        grid-template-columns: 60% 20% 10%;
        grid-column-gap: 0.625rem; 
    }

    .ingredients-edit__item input, .ingredients-edit__item button {
        margin-top: 0.625rem;
    } 

    .ingredients-edit__item button {
       padding: 0;
       max-height: 2.125rem;
    }

</style>


