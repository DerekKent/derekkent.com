import {Controller} from 'superb';
import {on} from '~/helpers/controller/decorators.js';
import template from './header.html.js';

const NAV_LIST = Symbol();
const MOBILE_MENU_BUTTON = Symbol();

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

    onLoaded() {
        this[NAV_LIST] = this.el.querySelector('ul');
        this[MOBILE_MENU_BUTTON] = this[NAV_LIST].querySelector('button');
    }

    updateHeaderRoute(e) {
        this.model = e.detail.page;
        this.update();
    }

    @on('click .expand-nav')
    toggleMobileMenu() {
        this[NAV_LIST].classList.toggle('open');
        this[MOBILE_MENU_BUTTON].classList.toggle('open');
    }

    @on('click a')
    closeMobileMenu() {
        this[NAV_LIST].classList.remove('open');
        this[MOBILE_MENU_BUTTON].classList.remove('open');
    }

}

const header = new Header();

export default header;
