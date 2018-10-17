<template>
  <div id="app">
    <app-header></app-header>
    <div class="header-filler"></div>
    <router-view name="home"></router-view>
		<router-view name="recipes"></router-view>
		<router-view name="shopping"></router-view>
  </div>
</template>

<script>
// import Home from './components/home.vue'
import Header from './components/header.vue'
export default {
  name: 'app',
  data () {
    return {
      isMobile: true
    }
  },
  components: {
    // appHome: Home,
    appHeader: Header
  }
}
</script>

<style>
:root {
	--global-header-height: 3rem;
	--head-foot-back-color: #f8f8f8;
	--global-hover-color: #4f9e4f;

	--global-button-ok-background-color: #5cb85c;
	--global-button-ok-border-color: #4cae4c;
	--global-button-ok-hover-color: #4f9e4f;
	--global-button-ok-hover-border-color: #3f803f;


	--global-button-no-background-color: #c45050;
	--global-button-no-border-color:#b14747;
	--global-button-no-hover-color: #9b3f3f;
	--global-button-no-hover-border-color: #813434;
}
* {
	box-sizing: border-box;
}

body {
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
	font-size: 0.875rem;
  color:black;
}

#app {
	/* max-width: 46rem; */
	max-width: 80rem;
}

.header-filler {
	display: block; 
	content: "";
	height: var(--global-header-height);  /* fixed header height */
	/* margin-top: 3rem;   negative fixed header height */
	visibility: hidden;
}

.bookmark::before {
	display: inline-block;
	content: "";
	height: var(--global-header-height);     /*fixed header height */
	margin-top: -var(--global-header-height);  /* negative fixed header height */
	visibility: hidden;
} 

.btn{
	display:inline-block;
	color:white;
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

.btn:hover{
	text-decoration: none;
}

.btn:focus {
	outline: none;
}

.btn-ok {
		background-color: var(--global-button-ok-background-color);
		border-color:var(--global-button-ok-border-color);
}

.btn-ok:hover {
	background-color: var(--global-button-ok-hover-color);
	border-color:var(--global-button-ok-hover-border-color);
}

.btn-no {
		background-color: var(--global-button-no-background-color);
		border-color:var(--global-button-no-border-color);
}

.btn-no:hover {
	background-color: var(--global-button-no-hover-color);
	border-color:var(--global-button-no-hover-border-color);
}

button[disabled] {
        background-color: gray;
				border-color:gray;
}

button[disabled]:hover {
        background-color: gray;
				border-color:gray;
}


.label-cus {
    display: inline-block;
    max-width: 100%;
    margin-top: 5px;
		margin-bottom: 5px;
} 

.input-text {
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
		font-family: inherit;
}

.input-textarea {
	  display: block;
	  width: 100%;
    height: auto; 
    padding: 6px 12px;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
		font-family: inherit;
}

.image img {
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
}

/* error styling */
.from-group.invalid label {
		color: red;
}

.from-group.invalid .error {
		color: red;
}

.from-group.invalid input {
		border: 1px solid red;
		background-color: #ffc9aa;
}

</style>
