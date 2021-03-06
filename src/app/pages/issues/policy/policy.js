import {Controller} from 'superb';
import template from './policy.html.js';

export default class Policy extends Controller {

    init() {
        this.template = template;
        this.css = '/app/pages/issues/policy/policy.css';
        this.view = {
            tag: 'main',
            classes: ['issues_policy-page', 'page']
        };
    }

    onLoaded() {
        document.title = 'Evidence-based Policies — Derek Kent';
    }

}
