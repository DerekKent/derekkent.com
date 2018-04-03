import {Controller} from 'superb';
import header from './header/header.js';
import footer from './footer/footer.js';
import endorsements from './endorsements/endorsements.js';
import template from './shell.html.js';

class Shell extends Controller {

    init() {
        this.el = 'body';
        this.template = template;
        this.regions = {
            header: '#header',
            main: '#main',
            endorsements: '#endorsements',
            footer: '#footer'
        };
    }

    onLoaded() {
        this.regions.header.attach(header);
        this.regions.endorsements.attach(endorsements);
        this.regions.footer.attach(footer);
    }

}

const shell = new Shell();

export default shell;
