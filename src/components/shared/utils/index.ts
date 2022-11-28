import {
    UseCompNameSpace,
    UseClsCompNameSpace,
    ComponentNameGenerater,
    ComponentClsNameGenerater,
} from "../types";
import { isEmpty } from "lodash";

const compClsPrefix = "tachi";

// wrap single comp class name hook
export const useCompNameSpace: UseCompNameSpace = (compTag, cssModule?) => {
    const value = componentNameGenerater({
        [compClsPrefix]: true,
        [`-${compTag}`]: !!compTag,
    });

    if (isEmpty(cssModule)) {
        return value;
    } else {
        return cssModule[value];
    }
};

// wrap interface comp class name hook.
export const useClsCompNameSpace: UseClsCompNameSpace = (compCls, cssModule?) => {
    if(isEmpty(compCls)) return {};
    else if (isEmpty(cssModule)) {
        return componentClsNameGenerater(compCls);
    } else {
        return componentClsNameGenerater(compCls, cssModule);
    }
};

const componentNameGenerater: ComponentNameGenerater = (clsConfig) => {
    let res = "";
    for (const key in clsConfig) {
        const value = Reflect.get(clsConfig, key);
        if (value) {
            res += key;
        }
    }

    return res;
};

const componentClsNameGenerater: ComponentClsNameGenerater = (clsConfig, cssModule?) => {
    const res = {};
    for (const key in clsConfig) {
        const value = Reflect.get(clsConfig, key);
        if(value && cssModule) {
            res[cssModule[`${compClsPrefix}-${key}`]] = value;
        } else if (value && !cssModule) {
            res[`${compClsPrefix}-${key}`] = value;
        }
    } 
    return res;
};
