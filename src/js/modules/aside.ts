class AsideMenu {
    menuItems: NodeListOf<HTMLElement>;
    oldMenuItems: HTMLElement;
    constructor(asideMenu: HTMLElement) {
        this.menuItems = asideMenu.querySelectorAll(":scope > li");

        const self = this;
        [...this.menuItems].map((item) => item.addEventListener("click", self.render.bind(self)));
        this.hide();

        this.oldMenuItems;
    }
    render(e: Event): void {
        e.preventDefault();
        const element: HTMLElement = e.target as HTMLElement;
        const menuItem: HTMLElement = element.closest("li");
        const submenu: HTMLElement =  menuItem.querySelector("menu");
        if (this.oldMenuItems == menuItem) {
            return;
        }
        // this.hide();
        
        submenu.classList.remove("none");
        menuItem.classList.add("active");
        const menuItemHeight: number = menuItem.getBoundingClientRect().height;
        submenu.style.height = `${menuItemHeight * submenu.querySelectorAll("li").length}px`;
        this.oldMenuItems = menuItem;
    }

    hide() {
        [...this.menuItems].forEach((element: HTMLElement):  void => {
            const submenu: HTMLElement = element.querySelector(".submenu");
            element.classList.remove("active");
            submenu.classList.add("none");
        });
    }
}

export function newAside(asideMenu: HTMLElement): AsideMenu {
    return new AsideMenu(asideMenu);
}

