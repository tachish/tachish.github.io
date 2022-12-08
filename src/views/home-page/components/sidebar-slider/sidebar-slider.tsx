import {
    defineComponent,
    ref,
    toRefs
} from "vue";

import styles from "./sidebar-slider.module.scss";

export const SideBarSlider = defineComponent({
    name: "SideBar",
    props: {
        width: {
            type: Number,
            required: true,
        },
        maxWidth: {
            type: Number,
            required: true,
            default: 0
        },
        minWidth: {
            type: Number,
            required: true,
            default: 0
        }
    }, 
    setup(props, { emit }) {
        const {
            width,
            minWidth,
            maxWidth
        } = toRefs(props);

        let startWidth = 0;

        const dragLock = ref<boolean>(false);
        const dragMakLayerVisible = ref<boolean>(false);
        let dragStartPosition:number = undefined;
        return () => (
            <>
                <div
                    class={{
                        [styles["tachi-sidebar-drag-slide-container"]]: true, 
                    }}
                    onMousedown={(e) => {
                        dragLock.value = false;
                        dragMakLayerVisible.value = true;
                        dragStartPosition = e.clientX;
                        startWidth = width.value;
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
                                if (nextWidth > maxWidth.value) {
                                    emit("update:width", maxWidth.value);
                                } else if (nextWidth < minWidth.value) {
                                    emit("update:width", minWidth.value);
                                } else {
                                    emit("update:width", nextWidth);
                                }
                            }}>
                        </div>
                    }
                </div>
            </>
        );
    }
});
