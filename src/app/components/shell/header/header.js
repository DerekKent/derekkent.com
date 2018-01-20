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
        });
    }

    updateHeaderRoute(e) {
        this.model = e.detail.page;
        this.update();
    }

    @on('click .expand-nav')
    toggleMobileMenu() {
        const list = this.el.querySelector('ul');
        const button = list.querySelector('button');

        list.classList.toggle('open');
        button.classList.toggle('open');
    }

    @on('click a')
    closeMobileMenu() {
        const list = this.el.querySelector('ul');
        const button = list.querySelector('button');

        list.classList.remove('open');
        button.classList.remove('open');
    }

}

const header = new Header();

export default header;
