import {Controller} from 'superb';
import {description as template} from './policy.html';

export default class Policy extends Controller {

    init() {
        this.template = template;
        this.css = '/app/pages/issues/policy/policy.css';
        this.view = {
            tag: 'main',
            classes: ['issues_policy-page', 'page']
        };
    }

}
