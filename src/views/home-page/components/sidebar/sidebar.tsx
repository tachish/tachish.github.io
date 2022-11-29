import {
    defineComponent,
} from "vue";

import styles from "./sidebar.module.scss";

export const SideBar = defineComponent({
    name: "SideBar",
    setup() {
        return () => (
            <>
                <div
                    class={{
                        [styles["tachi-sidebar-container"]]: true
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
                    <div
                        class={{
                            [styles["tachi-sidebar-drag-slide"]]: true
                        }}>
                        <div
                            class={{
                                [styles["tachi-sidebar-drag-navbar"]]: true
                            }}>

                        </div>
                        <div
                            class={{
                                [styles["tachi-sidebar-drag-content"]]: true
                            }}>
                            
                        </div>
                    </div>
                </div>
            </>
        );
    }
});
