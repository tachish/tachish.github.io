// vue
import {
    toRefs,
    renderSlot,
    defineComponent,
} from "vue";

// types
import { CustomCompProp } from "@/types/utils";
import {
    EAvatarType,
    AvatarWidth
} from "./types";

// styles
import styles from "./avatar.module.scss";

export const Avatar = defineComponent({
    name: "Avatar",
    props: {
        url: {
            type: String,
            required: true,
            default: ""
        },
        type: {
            type: Number as CustomCompProp<EAvatarType>,
            required: false,
            default: EAvatarType.CIRCLE
        },
        width: {
            type: Number as CustomCompProp<AvatarWidth>,
            required: false,
            default: 10
        }
    },
    setup(props, { slots }) {
        const {
            url,
            type,
            width
        } = toRefs(props);

        return () => (
            <>
                <div class={{
                    [styles["tachi-avatar-container"]]: true,
                    [`w-${width.value}`]: true,
                    [`h-${width.value}`]: true,
                    "rounded-full": type.value === EAvatarType.CIRCLE
                }}>
                    {
                        !slots.default ? (
                            <img
                                src={url.value} />
                        ) : renderSlot(slots, "default")
                    }
                </div>
            </>
        );
    },
    async onMounted() {
        console.log("[Avatar]", this.$slots.default);
    }
});
