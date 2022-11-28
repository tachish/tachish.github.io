import {
    ref,
    defineComponent,
} from "vue";

import { changeTheme } from "@/utils";
import { ETheme } from "@/types";

import styles from "./navbar.module.scss";

import { Avatar } from "@/components/Avatar/avatar";
import avatarUrl from "@/assets/sakurajima.jpeg";

import { Input } from "@/components/Input/input";
import { Switch } from "@/components/Switch/switch";


export const NavBar = defineComponent({
    name: "NavBar",
    setup() {
        const inputValue = ref("test");

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

        const swtichValue = ref(false);
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
            <div
                class={{
                    [styles["tachi-navbar-container"]]: true,
                }}>
                <Avatar url={avatarUrl} width={3} />
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
                <Input
                    value={inputValue.value}
                    v-slots={inputSlots}>
                </Input>
            </div>
        );
    }
});
