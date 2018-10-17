<template>
    <div class="large-device-layout">
        <div>
            <button @click="addRecipe" id="btn-new-recipe" class="btn btn-ok">Add Recipe</button>
            <h1 id="welcome">Your Recipes</h1>
            <hr>
            <div v-for="(item, index) in recipes" :key="index" class="recipe-summary" @click="selectRecipe(index)">
            <div class="recipe-name">{{item.name}}</div>
            <div class="recipe-desc">{{item.description}}</div>
            <div class="image">
                    <img :src="item.imagePath" alt="no image" >
            </div>
            </div>
        </div>
        <div>
            <app-recipe-detail v-if="mode == mode_detail" :recipe="currentRecipe" @editRecipe="editRecipe" @deleteRecipe="deleteRecipe"></app-recipe-detail>
            <app-recipe-edit v-if="mode == mode_edit || mode == mode_add" :recipe="currentRecipe" :isEdit="mode == mode_edit" @EditCanceled="editCanceled" @EditSaved="saveRecipe"></app-recipe-edit>
        </div>
    </div>
</template>

<script>
import RecipeDetail from '../components/recipe-detail.vue';
import RecipeEdit from '../components/recipe-edit.vue';

export default {
    data() {
        return {
            mode_off: 0,
            mode_detail: 1,
            mode_edit: 2,
            mode_add: 3,
            mode: 0,
            selectIndex: -1,
            currentRecipe: null,
            recipes: this.$store.getters.getRecipes
        }
    },
    methods: {
        addRecipe() {
            this.mode = this.mode_add;
            this.currentRecipe = 
                {name:'',
                 description: '',
                 imagePath: '',
                 ingredients: []
                }
            this.selectIndex = -1;
        },
        selectRecipe(id) {
            this.selectIndex = id;
            this.currentRecipe = this.recipes[this.selectIndex];
            this.mode = this.mode_detail;
        },
        editCanceled() {
            if (this.selectIndex == -1) {
                this.mode = this.mode_off;
            } else {
                this.mode = this.mode_detail;
            }
        },
        saveRecipe() {

            if (this.mode == this.mode_edit) {
                this.$store.commit('updateRecipe',{index:this.selectIndex, recipe: this.currentRecipe});
            }

            if (this.mode == this.mode_add) {
                this.$store.commit('addRecipe',this.currentRecipe);
                this.selectIndex = this.recipes.length -1;
            }

            this.mode = this.mode_detail;
        },
        editRecipe() {
           this.currentRecipe = this.getRecipe(); 
           this.mode = this.mode_edit;
        },
        getRecipe() {
            if (this.selectIndex > -1) {
                return this.spreadRecipe(this.selectIndex);
            }
        },
        spreadRecipe(index) {
            //Makes a clone of the recipe 
            var tmpRecipe = {...this.recipes[index]};
            tmpRecipe.ingredients = [...tmpRecipe.ingredients];
            for (let i= 0; i < tmpRecipe.ingredients.length; i++) {
                tmpRecipe.ingredients[i] = {...tmpRecipe.ingredients[i]}
            }
            return tmpRecipe;
        },
        deleteRecipe() {
            this.$store.commit('deleteRecipe',this.selectIndex);
            this.mode = this.mode_off;
            this.selectIndex = -1;
            this.currentRecipe = null;
        }
     },
    components: {
        appRecipeDetail: RecipeDetail,
        appRecipeEdit: RecipeEdit
    }
}
</script>

<style scoped>
    #welcome {
        display:inline;
        margin: 0.5rem;
        font-size: 1rem;
    }

    .recipe-summary {
        display: grid;
        grid-template-columns: 4fr 1fr;
        grid-template-rows: 1fr 1fr;
        border: solid 1px #ddd; 
        border-radius: 4px;
        cursor: pointer;
        width: 100%;
        max-height: 6.25rem;
        padding: 0.625rem 0.9375rem;
    }

    .recipe-name {
        display: inline-block;
        font-family: inherit;
        margin-top:0;
        margin-bottom: 0.3125rem;
        font-size: 1.125rem;
        line-height: 1.1;
        grid-column: 1/1;
        grid-row: 1/2;
        text-align: left;
    }

    .recipe-desc {
        display: inline-block;
       margin-bottom: 0;
       line-height: 1.3;
       font-size: 0.875rem;
       grid-column: 1/1;
       grid-row: 2/3;
       text-align: left;
    }
    .image {
        grid-column: 2/3;
        grid-row:1/3;
        display: flex;
        justify-content: center;
    }

    @media (min-width: 23.5rem ) {
        #welcome {
            font-size: 1.5rem;
        }   
    }

    @media (min-width: 75rem) {
        .large-device-layout {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-column-gap: 1rem;
        }
    }
</style>


