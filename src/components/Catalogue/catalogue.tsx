// vue
import {
    ref,
    toRefs,
    defineComponent,
} from "vue";

// types
import { CustomCompProp } from "@/types";
import {
    CatalogueTree,
    CatalogueNode
} from "./types";

// utils
import { useCompNameSpace } from "../shared/utils";
import { isEmpty } from "lodash";
// styles
import styles from "./catalogue.module.scss";

const CatalogueItem = defineComponent({
    name: "CatalogueNode",
    props: {
        focusId: {
            type: Object as CustomCompProp<unknown>,
            required: false
        },
        data: {
            type: Object as CustomCompProp<CatalogueNode<unknown>>,
            required: true
        },
        indentation: {
            type: Number,
            required: false,
            default: () => 1
        },
        expandable: {
            type: Boolean,
            required: false,
            default: () => false
        }
    },
    setup(props) {
        const containerCls = useCompNameSpace("catalogue-node-wrapper");
        const dataContainerCls = useCompNameSpace("catalogue-data-container");
        const childrenContainerCls = useCompNameSpace("catalogue-children-container");

        const {
            indentation,
            focusId
        } = toRefs(props);
        
        const expandStatus = ref(true);
        return () => (
            <div
                class={{
                    [styles[containerCls]]: true
                }}>
                <div
                    class={{
                        [styles[dataContainerCls]]: true
                    }}
                    style={{
                        // backgroundColor: focusId.value === props.data.id ? "black" : ""
                    }}
                    onClick={() => {
                        expandStatus.value = !expandStatus.value;
                        focusId.value = props.data.id;
                    }}>
                    { props.data?.data }
                </div>
                {
                    !isEmpty(props.data?.children) && (!props.expandable || !!expandStatus.value) &&
                    (
                        <div
                            class={childrenContainerCls}
                            style={{
                                paddingLeft: indentation.value + "rem",
                            }}>
                            {
                                props.data?.children?.map(node => {
                                    return (
                                        <CatalogueItem
                                            data={node}
                                            focusId={props.focusId}
                                            indentation={props.indentation} />
                                    );
                                }) 
                            }
                        </div>
                    )
                }
            </div>
        );
    }
});

export const Catalogue = defineComponent({
    name: "Catalogue",
    props: {
        data: {
            type: Array as CustomCompProp<CatalogueTree<unknown>>,
            required: false,
            default: () => []
        },
        indentation: {
            type: Number,
            required: false,
            default: () => 10
        }
    },
    components: {
        CatalogueItem
    },
    setup(props) {
        const containerCls = useCompNameSpace("catalogue");

        const focusId = ref(null);
        return () => (
            <div class={{
                [styles[containerCls]]: true
            }}>
                {
                    props.data.map(node => {
                        return (
                            <CatalogueItem
                                focusId={focusId}
                                data={node} />
                        );
                    })
                }
            </div>
        );
    }
});
