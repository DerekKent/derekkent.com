class Accessibility {

    constructor() {
        this.update();
    }

    get level() {
        return window.localStorage.getItem('wcag2') || 'a';
    }

    setLevel(level) {
        const errorMessage = 'Accessibility level must be set to \'a\', \'aa\', or \'aaa\'.';

        if (typeof level !== 'string') {
            throw new Error(errorMessage);
        }

        level = level.toLowerCase();

        if (level !== 'a' && level !== 'aa' && level !== 'aaa') {
            throw new Error(errorMessage);
        }

        window.localStorage.setItem('wcag2', level);
        this.update();
    }

    update() {
        document.body.classList.toggle('wcag-aa', this.level === 'aa');
        document.body.classList.toggle('wcag-aaa', this.level === 'aaa');
    }

}

const accessibility = new Accessibility();

export default accessibility;
