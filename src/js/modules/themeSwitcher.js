class ThemeSwitcher {
    constructor() {
        this.toggleBtn = document.querySelector("#toggle-theme");
        this.events();
    }

    events() {
        this.toggleBtn.addEventListener('click', (e) => {
            if (document.documentElement.hasAttribute('theme')) {
                document.documentElement.removeAttribute('theme');
            }
            else {
                document.documentElement.setAttribute('theme', 'dark');
            }
        });
    }
}


export default ThemeSwitcher;
