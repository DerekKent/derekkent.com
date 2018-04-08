import {Controller} from 'superb';
import {on} from '~/helpers/controller/decorators.js';
import template from './header.html.js';

class Header extends Controller {

    init() {
        this.template = template;
        this.css = '/app/components/shell/header/header.css';
        this.view = {
            tag: 'header',
            classes: ['page-header']
        };

        window.addEventListener('route:loaded', (e) => {
            this.updateHeaderRoute(e);
            this.closeMobileMenu();
        });
    }

    updateHeaderRoute(e) {
        this.model = e.detail.page;
        this.update();
    }

    @on('click .expand-nav')
    toggleMobileMenu(e, open) {
        const navList = this.el.querySelector('ul');
        const toggleButton = navList.querySelector('button');

        switch (open) {
        case true:
            navList.classList.add('open');
            toggleButton.classList.add('open');
            break;
        case false:
            navList.classList.remove('open');
            toggleButton.classList.remove('open');
            break;
        default:
            navList.classList.toggle('open');
            toggleButton.classList.toggle('open');
        }
    }

    @on('click a')
    closeMobileMenu(e) {
        this.toggleMobileMenu(e, false);
    }

}

const header = new Header();

export default header;
