import {
    defineComponent,
    toRefs
} from "vue";

// types
// styles
import styles from "./switch.module.scss";

// utils
import {
    useCompNameSpace,
} from "../shared/utils";

export const Switch = defineComponent({
    name: "CustomInput",
    props: {
        modelValue: {
            type: Boolean,
            required: true,
        },
    },
    emits: ["update:modelValue", "change"],
    setup(props, { slots, emit }) {
        const containerCls = useCompNameSpace("switch-wrapper", styles);
        const containerNegCls = useCompNameSpace("switch-neg-wrapper", styles);
        const containerActCls = useCompNameSpace("switch-act-wrapper", styles);


        const switchGain = useCompNameSpace("switch-gain", styles);
        const switchGainNegative = useCompNameSpace("switch-gain-negative", styles);
        const switchGainActive = useCompNameSpace("switch-gain-active", styles);

        const { modelValue } = toRefs(props);

        return () => (
            <div
                class={{
                    [containerCls]: true,
                    [containerNegCls]: !modelValue.value,
                    [containerActCls]: modelValue.value
                }}
                onClick={(e) => {
                    e.stopPropagation();
                    emit("change", !modelValue.value);
                    emit("update:modelValue", !modelValue.value); 
                }}>
                <div class={{
                    [switchGain]: true,
                    [switchGainNegative]: !modelValue.value,
                    [switchGainActive]: modelValue.value
                }}>
                    {
                        !modelValue.value && slots.negetiveGain?.()
                    }
                    {
                        modelValue.value && slots.activeGain?.()
                    }
                </div>
            </div>
        );
    }
});
