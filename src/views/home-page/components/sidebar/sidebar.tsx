import { getRemToPxRate } from "@/utils";
import {
    ref,
    defineComponent,
} from "vue";

import styles from "./sidebar.module.scss";

export const SideBar = defineComponent({
    name: "SideBar",
    setup() {
        const widthRate = getRemToPxRate();
        const minWidth = 15 * widthRate;
        const maxWidth = 30 * widthRate;

        let startWidth = 0;
        const sidebarWidth = ref<number>(15 * widthRate);
        const dragLock = ref<boolean>(false);
        const dragMakLayerVisible = ref<boolean>(false);
        let dragStartPosition:number = undefined;

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

                    {/* drag slide */}
                    <div
                        class={{
                            [styles["tachi-sidebar-drag-slide-container"]]: true, 
                        }}
                        onMousedown={(e) => {
                            dragLock.value = false;
                            dragMakLayerVisible.value = true;
                            dragStartPosition = e.clientX;
                            startWidth = sidebarWidth.value;
                        }}
                        onMouseup={() => {
                            dragLock.value = true;
                            dragMakLayerVisible.value = false;
                            dragStartPosition = 0;
                            startWidth = 0;
                        }}>
                        <div
                            class={{
                                [styles["tachi-sidebar-drag-slide"]]: true,
                                [styles["tachi-sidebar-ldrag-slide"]]: true
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
                        <div
                            class={{
                                [styles["tachi-sidebar-drag-slide"]]: true,
                                [styles["tachi-sidebar-rdrag-slide"]]: true
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

                        {
                            dragMakLayerVisible.value &&
                            <div
                                class={{
                                    [styles["tachi-sidebar-mask"]]: true
                                }}
                                onMousemove={(e) => {
                                    const sidebarMoveOffsetX = (e.clientX - dragStartPosition);
                                    const nextWidth = startWidth + sidebarMoveOffsetX;
                                    if (nextWidth > maxWidth) {
                                        sidebarWidth.value = maxWidth;
                                    } else if (nextWidth < minWidth) {
                                        sidebarWidth.value = minWidth;
                                    } else {
                                        sidebarWidth.value = nextWidth;
                                    }
                                }}>
                            </div>
                        }
                    </div>
                </div>
            </>
        );
    }
});
