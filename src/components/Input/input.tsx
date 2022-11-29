// TODO: cumtomized width
// TODO: focus style (color variable), transparent mask
// TODO：divide line component.
// FIX: focus on prefix icon

// vue
import {
    ref,
    defineComponent,
    Ref,
    isRef,
    toRefs
} from "vue";

// types
import { CustomCompProp } from "@/types";

// styles
import styles from "./input.module.scss";

// utils
import {
    useCompNameSpace,
    useClsCompNameSpace
} from "../shared/utils";

export const Input = defineComponent({
    name: "CustomInput",
    props: {
        modelValue: {
            type: String as CustomCompProp<Ref | string>,
            required: false,
            default: () => ""
        },
        placeholder: {
            type: String,
            required: false,
            default: "请输入"
        }
    }, 

    setup(props, { slots, emit }) {
        const containerCls = useCompNameSpace("input-wrapper", styles);
        const focusedContainerCls = useCompNameSpace("input-focus-wrapper", styles);

        const prefixCls = useClsCompNameSpace({
            ["input-slot-container"]: true,
            ["input-prefix-container"]: true,
        }, styles);

        const suffixCls = useClsCompNameSpace({
            ["input-slot-container"]: true,
            ["input-suffix-container"]: true,
        }, styles);

        const inputCls = useCompNameSpace("input", styles);

        // NOTE: its better to set the height as static var. cz it will be not changed at most time.
        const height = ref(2);
        const focused = ref(false);

        const { modelValue } = toRefs(props);
        const normalizedValue = (inputValue) => {
            if (isRef(inputValue)) {
                return inputValue.value;
            } else {
                return inputValue;
            }
        };

        return () => (
            <div
                class={{
                    [containerCls]: true,
                    [focusedContainerCls]: focused.value,
                }}
                onFocusin={() => {
                    focused.value = true;
                }}
                onFocusout={() => {
                    focused.value = false;
                }}>
                {
                    slots.prefix &&
                    <div class={prefixCls}>
                        {
                            slots.prefix()
                        }
                    </div>
                }
                <input
                    class={inputCls}
                    style={{
                        height: height.value + "rem"
                    }}
                    value={normalizedValue(modelValue)}
                    placeholder={props.placeholder}
                    onInput={(e) => {
                        const newValue = (e.target as any).value;
                        if (typeof newValue === "string") {
                            emit("update:modelValue", newValue);
                        }
                    }}
                    onChange={(e) => {
                        e.stopPropagation();
                        const newValue = (e.target as any).value;
                        emit("change", newValue);
                    }}>
                </input>
                {
                    slots.suffix &&
                    <div class={suffixCls}>
                        {
                            slots.suffix()
                        }
                    </div>
                }
            </div>
        );
    }
});
