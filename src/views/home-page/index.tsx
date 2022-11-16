import {
    defineComponent,
} from "vue";

import { Avatar } from "@/components/Avatar/avatar";
import avatarUrl from "@/assets/sakurajima.jpeg";

import { Catalogue } from "@/components/Catalogue/catalogue";
import { treeMock } from "@/mock/index";

export const HomePage = defineComponent({
    name: "HomePage",
    setup() {
        return () => (
            <div class={"tachi-home-page-container"}>
                <Avatar url={avatarUrl} width={4} />
                <Catalogue data={[treeMock]} />
            </div>
        );
    },
    onMounted() {
        console.log("[Home Page]", this.$slots.default);
    }
});
