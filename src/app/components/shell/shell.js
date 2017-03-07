import {Controller} from 'superb';
import header from './header/header.js';
import footer from './footer/footer.js';
import {description as template} from './shell.html.js';

class Shell extends Controller {

    init() {
        this.el = 'body';
        this.template = template;
        this.regions = {
            header: '#header',
            main: '#main',
            footer: '#footer'
        };
    }

    onLoaded() {
        this.regions.header.attach(header);
        this.regions.footer.attach(footer);
    }

}

const shell = new Shell();

export default shell;
