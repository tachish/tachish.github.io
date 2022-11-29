import {
    ref,
    defineComponent,
} from "vue";

import { changeTheme } from "@/utils";
import { ETheme } from "@/types";

import styles from "./navbar.module.scss";

import { Avatar } from "@/components/Avatar/avatar";
import avatarUrl from "@/assets/avatar.jpeg";

import { Input } from "@/components/Input/input";
import { Switch } from "@/components/Switch/switch";


export const NavBar = defineComponent({
    name: "NavBar",
    setup() {
        const inputValue = ref("");

        const inputSlots = {
            prefix: () => {
                return (
                    <>
                        <i class={{
                            "fi fi-rs-search": true,
                            [styles["search-icon"]]: true
                        }}></i>
                    </>
                );
            }
        };

        const getCurrentTheme = () => {
            const bodyEle = document.querySelector("body");
            return (bodyEle as HTMLElement).getAttribute("data-theme");
        };
        const theme = getCurrentTheme();

        const swtichValue = ref(theme === ETheme.DARK);
        const switchSlots = {
            negetiveGain: () => {
                return (
                    <i class={{
                        "fi fi-rr-moon": true,
                        [styles["light-theme-icon"]]: true
                    }}></i>
                );
            },
            activeGain: () => {
                return (
                    <i class={{
                        "fi fi-rr-eclipse": true,
                        [styles["dark-theme-icon"]]: true
                    }}></i>
                );
            }
        };
        return () => (
            <>
                <div
                    class={{
                        [styles["tachi-navbar-container"]]: true,
                    }}>
                    <div
                        class={{
                            [styles["tachi-navbar-item"]]: true,
                        }}>
                        <Avatar
                            class={{
                                [styles["avatar"]]: true,
                            }}
                            url={avatarUrl}
                            width={3} />
                        <Input
                            vModel={[inputValue.value, "modelValue"]}
                            v-slots={inputSlots}>
                        </Input>  
                    </div>
                    <div
                        class={{
                            [styles["tachi-navbar-item"]]: true,
                            [styles["tachi-navbar-item-full"]]: true,
                        }}>                    

                    </div>
                    <div
                        class={{
                            [styles["tachi-navbar-item"]]: true,
                        }}>        
                        {/* Vue internal Bug */}          
                        <Switch
                            vModel={[swtichValue.value, "modelValue"]}
                            v-slots={switchSlots}
                            onChange={(newState) => {
                                if (newState) {
                                    // change to dark mode.
                                    changeTheme(ETheme.DARK);
                                } else {
                                    // change to light mode.
                                    changeTheme(ETheme.LIGHT);
                                }
                            }} />
                    </div>
                    <div
                        class={{
                            [styles["tachi-navbar-item"]]: true,
                        }}>
                        <i
                            class={{
                                "fi fi-brands-github": true,
                                [styles["github-icon"]]: true
                            }}
                            onClick={() => {
                                const url = "https://github.com/tachish";
                                window.open(url, "_blank");
                            }} />
                    </div>
                </div>
            </>
        );
    }
});
