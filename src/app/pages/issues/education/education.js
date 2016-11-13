import {Controller} from 'superb';
import {description as template} from './education.html';

export default class Education extends Controller {

    init() {
        this.template = template;
        this.css = '/app/pages/issues/education/education.css';
        this.view = {
            tag: 'main',
            classes: ['issues_education-page', 'page']
        };
    }

}
