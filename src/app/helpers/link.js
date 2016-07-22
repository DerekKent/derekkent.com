const EXTERNAL = /^((f|ht)tps?:)?\/\//;
const MAILTO = /^mailto:(.+)/;

function findAncestor(el, Element) {
    let parent = el;

    while (parent && !(parent instanceof Element)) {
        parent = parent.parentNode;
    }

    return parent;
}

function ignoreUrl(url) {
    return typeof url !== 'string' || MAILTO.test(url);
}

function ignoreClick(e) {
    return e.defaultPrevented || e.metaKey;
}

function validUrlClick(e) {
    const el = findAncestor(e.target, HTMLAnchorElement) || e.target;
    const href = el.getAttribute('href');

    if (ignoreClick(e) || ignoreUrl(href)) {
        return false;
    }

    return el;
}

function isExternal(href) {
    return EXTERNAL.test(href);
}

export default {
    isExternal,
    validUrlClick
};
