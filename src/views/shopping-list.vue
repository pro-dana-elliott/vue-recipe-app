<template>
    <div>
        <form id="shop-list">
            <div class="from-group" :class="{invalid: $v.ingName.$error}">
                <label for="name" class="label-cus">Name</label>
                <div class="error" v-if="$v.ingName.$error && !$v.ingName.required">Field is required. </div>
                <input type="text" id="name" class="input-text" v-model="$v.ingName.$model" 
                @blur="$v.ingName.$touch()">
            </div>
            <div class="from-group" :class="{invalid: $v.ingAmount.$error}">
                <label for="amount" class="label-cus">Amount</label>
                <div class="error" v-if="$v.ingAmount.$error && !$v.ingAmount.required">Field is required.</div>
                <div class="error" v-else-if=" $v.ingAmount.$error && !$v.ingAmount.minValue">Minimum value is 1.</div>
                <input type="number" id="amount" class="input-text" v-model="$v.ingAmount.$model"
                @blur="$v.ingAmount.$touch()">
            </div>
            <button type="button" id="save" class="btn btn-ok" @click.prevent="addIngredient" :disabled=" ($v.ingName.$invalid || $v.ingAmount.$invalid)">Add Ingredient</button>
            <button type="button" id="cancel" class="btn btn-no" @click.prevent="clearIngredient">Clear</button>
            <hr>
            <div id="ingredients-list">
                <div class="ingredients__item" v-if="shoppingList.length>0">
                    <div class="label-cus">Ingredient Name</div>
                    <div class="label-cus">Ingredient Amount</div>
                </div> 
                <div v-for="(ingredient, index) in $v.shoppingList.$each.$iter" :key="index" class="ingredients__item">
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
            </div>
            
        </form>
    </div>
</template>

<script>
import { required, minValue } from 'vuelidate/lib/validators'
export default {
    data() {
        return {
            shoppingList: this.$store.getters.getShoppingList,
            ingName: '',
            ingAmount: ''
        }
    },
    methods: {
        addIngredient() {
            this.$store.commit('addShoppingIngredient', {name: this.ingName, amount: this.ingAmount});
            this.clearIngredient();
        },
        clearIngredient() {
            this.ingName = '';
            this.ingAmount = '';
            this.$v.ingName.$reset();
            this.$v.ingAmount.$reset();
        },
        deleteIngredient(index) {
            this.$store.commit('deleteShoppingIngredient', index);
        }
    },
    validations: {
            ingName: { required },
            ingAmount: { required, minValue: minValue(1) },
            shoppingList: {
                $each:{
                    name: { required },
                    amount: { required, minValue: minValue(1) }  
                }
            }
        
    }
}
</script>

<style scoped>
    #save, #cancel {
        margin-top: 0.3125rem;
    }

    .ingredients-list {
        margin-top: 3.125rem;
    }

    .ingredients__item {
        display:grid;
        grid-template-columns: 60% 20% 10%;
        grid-column-gap: 0.625rem;
        
    }

    .ingredients__item input, .ingredients__item button {
        margin-top: 0.625rem;
    }

    .ingredients__item button {
        padding: 0;
        max-height: 2.125rem;
     }

</style>


