// vue
import {
    toRefs,
    renderSlot,
    defineComponent,
} from "vue";

// types
import { CustomCompProp } from "@/types";
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
            default: 3
        }
    },
    setup(props, { slots }) {
        const {
            url,
            type,
            width
        } = toRefs(props);

        return () => (
            <div
                class={{
                    [styles["tachi-avatar-container"]]: true,
                    "rounded-full": type.value === EAvatarType.CIRCLE
                }} style={{
                    width: width.value + "rem",
                    height: width.value + "rem",
                }}>
                {
                    !slots.default ? (
                        <img
                            src={url.value} />
                    ) : renderSlot(slots, "default")
                }
            </div>
        );
    }
});
