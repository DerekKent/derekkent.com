import {Controller} from 'superb';
import {on} from '~/helpers/controller/decorators.js';
import accessibility from '~/handlers/accessibility.js';
import template from './accessibility.html.js';

const USER_INPUT_KEYS = [13, 32];

export default class Accessibility extends Controller {

    init() {
        this.template = template;
        this.css = '/app/pages/accessibility/accessibility.css';
        this.view = {
            tag: 'main',
            classes: ['accessibility-page', 'page']
        };
        this.model = accessibility.level;
    }

    onLoaded() {
        document.title = 'Accessibility — Derek Kent';
    }

    @on('keydown .accessibility-level > li')
    @on('click .accessibility-level > li')
    setAccessibilityLevel(e) {
        if (e instanceof KeyboardEvent && !USER_INPUT_KEYS.includes(e.keyCode)) {
            return;
        }

        e.preventDefault();

        accessibility.setLevel(e.delegateTarget.textContent);
        this.model = accessibility.level;
        this.update();
    }

}
