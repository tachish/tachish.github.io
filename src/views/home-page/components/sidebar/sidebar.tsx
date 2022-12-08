import { getRemToPxRate } from "@/utils";
import {
    ref,
    defineComponent,
} from "vue";

import styles from "./sidebar.module.scss";

import { SideBarSlider } from "../sidebar-slider/sidebar-slider";
export const SideBar = defineComponent({
    name: "SideBar",
    setup() {
        const widthRate = getRemToPxRate();
        const minWidth = 15 * widthRate;
        const maxWidth = 30 * widthRate;
        const sidebarWidth = ref<number>(15 * widthRate);

        return () => (
            <>
                <div
                    class={{
                        [styles["tachi-sidebar-container"]]: true
                    }}
                    style={{
                        width: `${ sidebarWidth.value }px`,
                        minWidth: `${minWidth}px`,
                        maxWidth: `${maxWidth}px`,
                    }} >
                    <div class={{
                        [styles["tachi-sidebar-main-container"]]: true
                    }}>
                        <div class={{
                            [styles["tachi-sidebar-navbar-container"]]: true
                        }}>
                            bread crumbs
                        </div>
                        <div
                            class={{
                                [styles["tachi-sidebar-content-container"]]: true
                            }}>
                            side bar
                        </div>
                    </div>

                    <SideBarSlider
                        vModel={[sidebarWidth.value, "width"]}
                        minWidth={minWidth}
                        maxWidth={maxWidth} />
                </div>
            </>
        );
    }
});
