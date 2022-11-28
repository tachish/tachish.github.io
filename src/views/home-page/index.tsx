import {
    defineComponent,
} from "vue";

import { ETheme } from "@/types";
import { changeTheme } from "@/utils";

import { NavBar } from "./components/navbar/navbar";

export const HomePage = defineComponent({
    name: "HomePage",
    setup() {
        return () => (
            <div class={"tachi-home-page-container"}>
                <NavBar />
            </div>
        );
    },
    mounted() {
        changeTheme(ETheme.LIGHT);
    }
});
