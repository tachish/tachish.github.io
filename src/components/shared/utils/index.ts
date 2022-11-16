import { UseCompNameSpace } from "../types";

export const useCompNameSpace: UseCompNameSpace = (compTag) => {
    return componentNameGenerater({
        "tachi": true,
        [`-${compTag}`]: !!compTag,
    });
};

const componentNameGenerater = (clsConfig) => {
    let res = "";
    for (const key in clsConfig) {
        const value = Reflect.get(clsConfig, key);
        if (value) {
            res += key;
        }
    }

    return res;
};