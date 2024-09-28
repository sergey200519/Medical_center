class AsideMenu {
    constructor(asideMenu) {
        this.menuItems = asideMenu.querySelectorAll(":scope > li");
        const self = this;
        [...this.menuItems].map((item) => item.addEventListener("click", self.render.bind(self)));
        this.hide();
        this.oldMenuItems;
    }
    render(e) {
        const element = e.target;
        const menuItem = element.closest("li");
        const submenu = menuItem.querySelector("menu");
        const submenuItems = submenu.querySelectorAll(":scope > li");
        if (this.oldMenuItems == menuItem) {
            return;
        }
        if (this.oldMenuItems !== undefined) {
            this.hide();
        }
        this.oldMenuItems = menuItem;
        setTimeout(() => {
            submenu.classList.remove("none");
            menuItem.classList.add("active");
            const menuItemHeight = menuItem.getBoundingClientRect().height;
            submenu.style.height = `${menuItemHeight * submenuItems.length}px`;
            let newHeight = 0;
            submenuItems.forEach((item) => {
                newHeight += item.getBoundingClientRect().height;
            });
            if (newHeight > (menuItemHeight * submenuItems.length)) {
                submenu.style.height = `${newHeight}px`;
            }
            newHeight = 0;
        }, this.oldMenuItems === undefined ? 0 : 1000);
    }
    hide() {
        [...this.menuItems].forEach((element) => {
            const submenu = element.querySelector(".submenu");
            if (submenu) {
                submenu.style.height = "0px";
                setTimeout(() => {
                    element.classList.remove("active");
                    submenu.classList.add("none");
                }, 800);
            }
        });
    }
}
export function newAside(asideMenu) {
    return new AsideMenu(asideMenu);
}
