import { defineComponent } from "vue";

import { HomePage } from "./views/home-page";

import "./style.css";
export default defineComponent({
    name: "App",
    render() {
        return (
            <div class="app">
                <HomePage />
            </div>
        );
    },
});
