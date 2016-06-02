import {Controller} from 'superb';
import {description as template} from './footer.html';

class Footer extends Controller {

    init() {
        this.template = template;
        this.css = '/app/components/shell/footer/footer.css';
        this.view = {
            tag: 'footer',
            classes: ['page-footer']
        };
    }

}

let footer = new Footer();

export default footer;
