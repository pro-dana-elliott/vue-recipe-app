<template>
    <div class="recipe-detail">
        <div class="backdrop" :class="{'show-block':isShowBackdrop}" @click="toggleDropDown"></div>
        <div class="image">
            <img :src="recipe.imagePath" :alt="recipe.name" >
        </div>
        <div class="recipe-name">{{recipe.name}}</div>
        <div class="btn-group"> 
            <button type="button"
                    @click="toggleDropDown"
                    class="cus-btn btn-dropdown">
                    Manage Recipe <span class="caret"></span>
            </button>
            <ul :class="{'show-block':isShowDropDown}" class="dropdown-menu">
                <li><a @click="onAddToShoppingList" style="cursor: pointer;">Add to Shopping List</a></li>
                <li><a @click="onEditRecipe" style="cursor: pointer;" >Edit Recipe</a></li>
                <li><a @click="onDeleteRecipe" style="cursor: pointer;" >Delete Recipe</a></li>
            </ul>
        </div>

        <div class="recipe-desc">{{recipe.description}}</div>

        <div class="ingredients-list">
                <div v-for="(ingredient, i) in recipe.ingredients" :key="i" class="ingredients-item">
                 {{ ingredient.name}} - {{ ingredient.amount }} 
                </div>
        </div>
    </div>
</template>

<script>
export default {
     props: {
         'recipe': {
            type: Object,
            default: function() {
                return {
                    recipe: {
                        name:'please pick a recipe',
                        description:'please pick a recipe',
                        imagePath: '',
                        ingredients: []
                    }
                }
            }
        }
    },
    data() {
        return {
            isShowDropDown: false,
            isShowBackdrop: false
        }
    },
    methods: {
        toggleDropDown() {
            this.isShowBackdrop = !this.isShowBackdrop;
            this.isShowDropDown = !this.isShowDropDown;
        },
        onAddToShoppingList() {
            this.$store.commit('ImportIngredients',this.recipe.ingredients)
            this.toggleDropDown();
        },
        onEditRecipe() {
            this.$emit('editRecipe');
            this.toggleDropDown();
        },
        onDeleteRecipe() {
            this.$emit('deleteRecipe');
            this.toggleDropDown();
        }
    }
}
</script>

<style scoped>
.recipe-detail {
    display: flex;
    flex-direction: column;
}

.recipe-name {
    display: block;
    font-family: inherit;
    margin: 0.625rem;
    font-size: 2.25rem;
    line-height: 1.1;
    text-align: left;
}

.recipe-desc {
    display: block;
    line-height: 1.3;
    font-size: 0.875rem;
    text-align: left;
    margin: 0.625rem;
}

.ingredients-item {
    border: solid 1px #ddd; 
    border-radius: 4px;
    padding: 10px 15px;
    font-size:0.875rem;
}

.dropdown-menu {
    display:none;
    position: absolute;
    z-index: 30;
    float: left;
    min-width: 160px;
    padding: 5px;
    margin: 2px 0 0;
    font-size: 0.875rem;
    text-align: left;
    list-style: none;
    background-color: white;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.149);
    border-radius: 4px;
    box-shadow: 0 6px 12px rgba(0,0,0,.175);
}

.dropdown-menu > li > a {
    display: block;
    padding: 3px 20px;
    clear: both;
    font-weight: 400;
    line-height: 1.42857143;
    color: rgb(36, 35, 35);
    white-space: nowrap;
}

.dropdown-menu > li > a:hover {
    color: #262626;
    text-decoration: none;
    background-color: #f5f5f5;
}

/* ManageRecipes Buttons */
.cus-btn {
    display:inline-block;
    background-color: #5cb85c;
    color:white;
    border-color: #4cae4c;
    padding: 6px 12px;
    font-family: inherit;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    border-radius: 4px;
}

.cus-btn:hover {
    text-decoration: none;
    background-color: #449d44;
    border-color: #398439;
}

.btn-dropdown {
    padding-right: 2rem;
}

.btn-drop-down {
    padding-right: 1.5rem;
}
.arrow-down {
  width: 0; 
  height: 0; 
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid #f00;
}

.caret {
  position: relative;
  cursor: pointer;
}

.caret:before {
  content: '';
  position: absolute;
  top: 25%;
  left: 5px;
  border-top: 10px solid white;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
}

/* miscellaneous */
.show-block {
    display: block !important; 
}

.backdrop {
  display: none;
  position: fixed;
  opacity: 0.8;
  top: 0;
  left: 0;
  z-index: 20;
  width: 100vw;
  height: 100vh;
  background: rgba(92, 92, 92, 0.5);
  transition: opacity 0.2s linear;
}

</style>
