import { createApp } from "vue";
import App from "./App.vue";

// import styles
//import './assests/main.scss'
import './assets/main.css';

// import js glob
const autoImportModules = import.meta.globEager('./autoImports/*.js')
console.log("importedGlob", autoImportModules)


createApp(App).mount("#app");
