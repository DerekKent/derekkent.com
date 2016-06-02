import {Controller} from 'superb';
import header from './header/header';
import footer from './footer/footer';
import {description as template} from './shell.html';

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

let shell = new Shell();

export default shell;
