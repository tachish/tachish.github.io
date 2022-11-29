import {
    defineComponent,
} from "vue";

import styles from "./index.module.scss";

import { ETheme } from "@/types";
import { changeTheme } from "@/utils";
import dayjs from "dayjs";

import { NavBar } from "./components/navbar/navbar";
import { SideBar } from "./components/sidebar/sidebar";
import { MainContent } from "./components/main-content/content";

export const HomePage = defineComponent({
    name: "HomePage",
    setup() {
        return () => (
            <div
                class={{
                    [styles["tachi-home-page-container"]]: true
                }}>
                <div
                    class={{
                        [styles["tachi-home-page-sidebar"]]: true
                    }}>
                    <SideBar
                        class={{
                            [styles["tachi-home-page-sidebar"]]: true
                        }} />
                </div>
                <div
                    class={{
                        [styles["tachi-home-page-main"]]: true
                    }}>
                    <NavBar />
                    <div class={{
                        [styles["tachi-home-page-content"]]: true
                    }}>
                        <MainContent />
                    </div>
                </div>
            </div>
        );
    },
    created() {
        const nowHour = dayjs().hour();
        console.log("[new hour]", nowHour);
        
        if (nowHour > 6 && nowHour < 19) {
            changeTheme(ETheme.LIGHT);
        } else {
            changeTheme(ETheme.DARK);
        }
    },
});
