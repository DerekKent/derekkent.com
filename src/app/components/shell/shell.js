import {Controller} from 'superb';
import header from './header/header.js';
import footer from './footer/footer.js';
import banner from './banner/banner.js';
import endorsements from './endorsements/endorsements.js';
import template from './shell.html.js';

class Shell extends Controller {

    init() {
        this.el = 'body';
        this.template = template;
        this.regions = {
            banner: '#banner',
            header: '#header',
            main: '#main',
            endorsements: '#endorsements',
            footer: '#footer'
        };
    }

    onLoaded() {
        this.regions.banner.attach(banner);
        this.regions.header.attach(header);
        this.regions.endorsements.attach(endorsements);
        this.regions.footer.attach(footer);
    }

}

const shell = new Shell();

export default shell;
