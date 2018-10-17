<template>
	<div>
		<header class="main-header">
			<div>
				<button class="toggle-button" @click="toggleButtonClicked">
					<span class="toggle-button__bar"></span>
					<span class="toggle-button__bar"></span>
					<span class="toggle-button__bar"></span>
				</button>
			</div>
			<nav role="navigation" class="main-nav">
				<ul class="main-nav__items">
					<router-link tag="li" to="/" class="main-nav__item" active-class="active" style="cursor: pointer">Home</router-link>
					<router-link tag="li" to="/recipes" class="main-nav__item" active-class="active" style="cursor: pointer">Recipes</router-link>
					<router-link tag="li" to="/shopping" class="main-nav__item" active-class="active" style="cursor: pointer">Shopping List</router-link>
				</ul>
			</nav>
		</header>
	    <nav class="mobile-nav" @click="mobileNavClicked" :class="{'open-mobile-Nav':isOpenMobileNav}">
			<ul class="mobile-nav__items">
				<router-link tag="li" to="/" class="mobile-nav__item" active-class="active" style="cursor: pointer" @click="mobileItemClicked">Home</router-link>
				<router-link tag="li" to="/recipes" class="mobile-nav__item" active-class="active" style="cursor: pointer" @click="mobileItemClicked">Recipes</router-link>
				<router-link tag="li" to="/shopping" class="mobile-nav__item" active-class="active" style="cursor: pointer" @click="mobileItemClicked">Shopping List</router-link>
			</ul>
		</nav>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isOpenMobileNav: false
		}
	},
	methods: {
		toggleButtonClicked() {
			this.OpenMobileNav();
		},
		mobileNavClicked() {
			this.closeMobileNav();
		},
		mobileItemClicked() {
			this.closeMobileNav();
		},
		OpenMobileNav() {
			this.isOpenMobileNav = true;
		},
		closeMobileNav() {
			this.isOpenMobileNav = false;
		}
	}
}
</script>

<style scoped>

.main-header {
	background-color: var(--head-foot-back-color);
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: var(--global-header-height);
	padding:0 1rem;
	z-index:5;
	display: flex;
	align-items: center;
    border-color: #e7e7e7;
}

/*Main header*/
.main-nav {
	display: none;
}

.main-nav__items {
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
}
  
.main-nav__item {
	text-decoration: none;
	font-weight: bold;
	padding: 0.2rem 1rem;
  font-size: 1rem;
}
  
.main-nav__item:hover,
.main-nav__item:active {
	color: var(--global-hover-color);
}
	
.main-nav__item:focus {
	outline: none;
}

.mobile-nav {
  position: fixed;
  opacity: 0;
  transform: translateX(-3rem);
  transition: opacity 200ms, transform 0.5s;
  z-index: -5;
  top: 0;
  left: 0;
  background-color: var(--head-foot-back-color);
  width: 100vw;
  height: 100vh;
}

.mobile-nav__items {
  width: 100%;
  height: 100%;
  list-style: none;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.mobile-nav__item {
  text-decoration: none;
	font-weight: bold;
	padding: 0.2rem 0;
	font-size: 1.5rem;
	margin: 1rem 0;
}

.mobile-nav__item:hover,
.mobile-nav__item:active {
  color: var(--global-heading-color);
}

.toggle-button {
	width: 3rem;
	background: transparent;
	border: none;
	cursor: pointer;
	padding-top: 0;
	padding-bottom: 0;
	vertical-align: middle;
}
	
.toggle-button:focus {
	outline: none;
}
	
.toggle-button__bar {
	width: 100%;
	height: 0.2rem;
	background: black;
	display: block;
	margin: 0.6rem 0;
}

.open-mobile-Nav {
  display: block !important;
  opacity: 1 !important;
  transform: translateX(0) !important;
  z-index: 50;
}

/* medium device*/
@media (min-width: 40rem) {

  .toggle-button {
    display: none;
  }

  .main-nav {
    display: flex;
  }
}
</style>



