import {
    defineComponent,
} from "vue";

import styles from "./content.module.scss";

export const MainContent = defineComponent({
    name: "MainContent",
    setup() {
        return () => (
            <>
                <div class={{
                    [styles["tachi-main-content-container"]]: true
                }}>
                    main content
                </div>
            </>
        );
    }
});
