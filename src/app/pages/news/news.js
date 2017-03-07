import {Controller} from 'superb';
import {description as template} from './news.html.js';

export default class News extends Controller {

    init() {
        this.template = template;
        this.css = '/app/pages/news/news.css';
        this.view = {
            tag: 'main',
            classes: ['news-page', 'page']
        };
    }

    onLoaded() {
        document.title = 'News — Derek Kent';
    }

}
