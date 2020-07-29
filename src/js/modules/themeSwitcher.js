class ThemeSwitcher {
    constructor() {
        this.themeSwitcherButton = document.querySelector('.catcall__image');
        this.events();
    }

    events() {
        this.themeSwitcherButton.addEventListener('click', () => {
            // this.document.body.classList.toggle('body--dark');
            console.log('1');
        });
    }
}


export default ThemeSwitcher;