const IS_JSON = /application\/json/i;

const FETCH = Symbol();

class Xhr {

    get(url = '', headers) {
        return Xhr[FETCH](url, {
            method: 'GET',
            headers
        });
    }

    put(url = '', data, headers) {
        return Xhr[FETCH](url, {
            method: 'PUT',
            body: data,
            headers
        });
    }

    post(url = '', data, headers) {
        return Xhr[FETCH](url, {
            method: 'POST',
            body: data,
            headers
        });
    }

    patch(url = '', data, headers) {
        return Xhr[FETCH](url, {
            method: 'PATCH',
            body: data,
            headers
        });
    }

    delete(url = '', headers) {
        return Xhr[FETCH](url, {
            method: 'DELETE',
            headers
        });
    }

    static [FETCH](url, options = {method: 'GET', headers: {}}) {
        options.headers = options.headers || {};

        // CSRF Custom Header Defense
        options.headers['X-Requested-With'] = 'XMLHttpRequest';

        // Detect basic objects, but ignore FormData
        if (options.body && options.body.constructor === Object) {
            options.headers['Content-Type'] = 'application/json';
        }

        const req = new XMLHttpRequest();
        const promise = new Promise((resolve, reject) => {
            function error() {
                reject({
                    request: req,
                    response: req.response,
                    responseText: req.responseText,
                    status: req.status,
                    statusText: req.statusText
                });
            }

            req.onload = () => {
                if (req.status >= 200 & req.status <= 299) {
                    if (IS_JSON.test(req.getResponseHeader('Content-Type'))) {
                        resolve(JSON.parse(req.response));
                    } else {
                        resolve(req.response);
                    }
                } else if (req.status >= 400) {
                    error();
                }
            };

            req.onabort = () => {
                reject({
                    status: 'aborted'
                });
            };

            req.onerror = () => {
                error();
            };

            req.open(options.method, url);

            for (const key in options.headers) {
                if (options.headers.hasOwnProperty(key)) {
                    req.setRequestHeader(key, options.headers[key]);
                }
            }

            req.withCredentials = false;

            if (['PUT', 'POST', 'PATCH'].includes(options.method) && options.body) {
                req.send(options.body);
            } else {
                req.send();
            }
        });

        promise.abort = req.abort.bind(req);

        return promise;
    }

}

const xhr = new Xhr();

export default xhr;
