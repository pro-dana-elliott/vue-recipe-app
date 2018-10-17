import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue';
import Recipes from './views/recipe-list.vue';
import Shopping from './views/shopping-list.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path: '', name: 'routeHome', components: {
        default: Home,
        'home': Home
    }},
    {path: '/recipes', components: {
        default: Recipes,
        'recipes': Recipes
    }},
    {path: '/shopping', components: {
        default: Shopping,
        'shopping': Shopping
    }},
    {path: '*', redirect: {name: 'routeHome'}},  
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
        return savedPosition;
    } else if (to.hash) {
        return { selector: to.hash};
    } else {
        return {x: 0, y: 0};
    }
  }
})
