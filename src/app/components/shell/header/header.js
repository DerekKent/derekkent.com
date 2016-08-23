import {Controller} from 'superb';
import {description as template} from './header.html';

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

}

const header = new Header();

export default header;
