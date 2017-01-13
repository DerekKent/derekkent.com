import {Controller} from 'superb';
import {description as template} from './ubi.html';

export default class BasicIncome extends Controller {

    init() {
        this.template = template;
        this.css = '/app/pages/issues/ubi/ubi.css';
        this.view = {
            tag: 'main',
            classes: ['issues_ubi-page', 'page']
        };
    }

    onLoaded() {
        document.title = 'Universal Basic Income — Derek Kent';
    }

}
