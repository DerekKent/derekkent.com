import {Controller} from 'superb';
import {description as template} from './news.html';

export default class News extends Controller {

    init() {
        this.template = template;
        this.css = '/app/pages/news/news.css';
        this.view = {
            tag: 'main',
            classes: ['news-page', 'page']
        };
    }

}
