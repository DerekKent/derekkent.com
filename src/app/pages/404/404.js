import {Controller} from 'superb';
import {description as template} from './404.html';

export default class FourOhFour extends Controller {

    init() {
        this.template = template;
        this.view = {
            tag: 'main'
        };
    }

}
