<script setup>

// import './assets/main.css';

/* import the css module */
import styles from './assets/example.module.css';
console.log('css module',styles)


import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1 :class="styles.example">Hello CSS Modules</h1>
  <HelloWorld msg="Hello Vue 3 + Vite" />
</template>

<style>

/*@import './assets/main.css' (max-width: 800px);*/

#app {

  & p {
    color: greenyellow;
  }

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
