/// <reference types="vite/client" />

declare module "*.vue" {
    import { DefineComponent } from "vue";

    const componet: DefineComponent<{}, {}, any>;

    export default componet;
}