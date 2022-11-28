type CSSModule = { readonly [key: string]: string };
export type CompNameCls = {
    [k: string]: boolean
}

export type UseCompNameSpace = (compTag: string, cssModule?: CSSModule) => string;
export type ComponentNameGenerater = (clsConfig: CompNameCls) => string;
export type WrappedCompNameCls = CompNameCls;
export type UseClsCompNameSpace = (compCls: WrappedCompNameCls, cssModule?: CSSModule) => WrappedCompNameCls;
export type ComponentClsNameGenerater = (clsConfig: CompNameCls, cssModule?: CSSModule) => WrappedCompNameCls;

export type BasicTreeNode<T> = {
    id: unknown,
    data: T,
    children?: Array<BasicTreeNode<T>>
};