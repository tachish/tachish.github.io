import { ETheme } from "@/types";

export function changeTheme(theme: ETheme) {
    const rootEle = document.querySelector("body");
    if (rootEle) {
        (rootEle as HTMLElement).setAttribute("data-theme", theme);
    }
}