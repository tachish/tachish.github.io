import {
    defineComponent,
} from "vue";

import { Avatar } from "@/components/Avatar/avatar";
import avatarUrl from "@/assets/sakurajima.jpeg";

export const HomePage = defineComponent({
    name: "HomePage",
    setup() {
        return () => (
            <div class={"tachi-home-page-container"}>
                <Avatar url={avatarUrl} width={10} />
            </div>
        );
    },
    onMounted() {
        console.log("[Home Page]", this.$slots.default);
    }
});
