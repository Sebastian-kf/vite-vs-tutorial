<script setup lang="ts">

//import styles
 import './assets/main.css';
// import the css module 
//import styles from "./assets/example.module.css";
//console.log('css module', styles)

// import static files 
// import logo from './assets/logo.png';
// console.log('logo', logo)
//const logo =  new URL('./assets/logo.png', import.meta.url).href;

// import JSON data
// import data from './data.json'
// console.log("JSON data", data);
// import { developerMood } from './data.json'
const developerMood: string = "Thrilled for TypeScript!" //TypeScript variable
console.log("JSON.data.developerMood", developerMood);

// realistic use case for importing globs
/* 
const autoImportedModules = import.meta.glob("./assets/avatars/*.jpeg",{
  eager: true
})
*/

import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png"/>
  <!-- <img alt="Vue logo" :src="logo" /> -->
  <!-- absolute path (for public folder files) -->
  <!-- <img alt="Vue logo" src="/logo.png" -->
  <!-- <img v-for="img in images" :key="img" :src="img.default"> -->
  <h1>Hello CSS Modules</h1>
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
  color: #293540;
  margin-top: 60px;
}
</style>
