import { ETheme } from "@/types";

export function changeTheme(theme: ETheme) {
    const themeRootEle = document.querySelector("body");
    if (themeRootEle) {
        (themeRootEle as HTMLElement).setAttribute("data-theme", theme);
    }
}