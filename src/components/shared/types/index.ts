export type UseCompNameSpace = (compTag: string) => string;

export type BasicTreeNode<T> = {
    id: unknown,
    data: T,
    children?: Array<BasicTreeNode<T>>
};