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

        const isSticky = ref<boolean>(true);
        const stickyVisible = ref<boolean>(false);
        return () => (
            <>
                {
                    !isSticky.value &&
                    <div
                        class={{
                            [styles["tachi-sidebar-stick-btn"]]: true
                        }}
                        onClick={() => {
                            isSticky.value = true;
                        }}>
                        展开
                    </div>
                }
                <div
                    class={{
                        [styles["tachi-sidebar-container"]]: true,
                    }}
                    style={{
                        width: isSticky.value ? `${ sidebarWidth.value }px` : "",
                        minWidth: isSticky.value ? `${minWidth}px` : "",
                        maxWidth: `${maxWidth}px`,
                    }} >
                    <div class={{
                        [styles["tachi-sidebar-main-container"]]: true,
                        [styles["tachi-sidebar-unstick-container"]]: !isSticky.value,
                        [styles["tachi-sidebar-unstick-show"]]: !isSticky.value && stickyVisible.value,
                        [styles["tachi-sidebar-unstick-hide"]]: !isSticky.value && !stickyVisible.value
                    }}>
                        <div class={{
                            [styles["tachi-sidebar-navbar-container"]]: true
                        }}>
                            bread crumbs
                            <i
                                class={{
                                    "fi fi-rs-thumbtack": true,
                                    [styles["thumbtack-icon"]]: true,
                                    [styles["erect-thumbtack-icon"]]: isSticky.value,
                                }}
                                onClick={() => {
                                    isSticky.value = !isSticky.value;
                                    console.log("[thumbtack]", isSticky.value);
                                }} />
                        </div>
                        <div
                            class={{
                                [styles["tachi-sidebar-content-container"]]: true
                            }}>
                            side bar
                        </div>
                    </div>

                    {
                        isSticky.value &&
                        <SideBarSlider
                            vModel={[sidebarWidth.value, "width"]}
                            minWidth={minWidth}
                            maxWidth={maxWidth}
                            sticky={isSticky.value} />
                    }
                </div>
            </>
        );
    }
});
