export * from "./theme";

export function getRemToPxRate(): number {
    const rootEle = document.querySelector("html");
    if (!rootEle.style.fontSize) {
        return 16;
    } else {
        const fontSize = rootEle.style.fontSize.slice(0, rootEle.style.fontSize.length - 2);
        return Number(fontSize);
    }
}
