class AsideMenu {
    menuItems: NodeListOf<HTMLElement>;
    constructor(asideMenu: HTMLElement) {
        this.menuItems = asideMenu.querySelectorAll(":scope > li");
        console.log(this.menuItems);

        const self = this;
        [...this.menuItems].map((item) => item.addEventListener("click", self.render.bind(self)));
        this.hide();
    }
    render(e: Event): void {
        e.preventDefault();
        this.hide();
        [...this.menuItems].map((item) => item.classList.remove("active"));
        const li = (e.target as HTMLElement).closest("li");
        //const liHeight = li.getBoundingClientRect().height;
        li.classList.add("active");
        // TODO magic number
        //document.documentElement.style.setProperty("--li_active_before_top", `${liHeight / 2 - (20 / 2)}px`)
        (li.querySelector("[class*='sub']") as HTMLElement).style.maxHeight = `${li.scrollHeight + 20}px`
    }

    hide() {
        [...this.menuItems].forEach(element => {
            element.querySelector("menu").style.maxHeight = "0px";
        });
    }
}

export function new_aside(asideMenu: HTMLElement) {
    return new AsideMenu(asideMenu);
}
