require('jsdom-global')();

const RESERVED_KEYS = {
    length: true,
    key: true,
    setItem: true,
    getItem: true,
    removeItem: true,
    clear: true
};

const StorageShim = function () {
    Reflect.defineProperty(this, 'length', {
        enumerable: false,
        get() {
            return Object.keys(this).length;
        }
    });

    Reflect.defineProperty(this, 'key', {
        enumerable: false,
        value(n) {
            const key = Object.keys(this)[n];

            return key || (key === '' ? key : null);
        }
    });

    Reflect.defineProperty(this, 'setItem', {
        enumerable: false,
        value(key, value) {
            if (key in RESERVED_KEYS) {
                throw new Error(`Cannot assign to reserved key "${key}"`);
            }

            this[key] = `${value}`;
        }
    });

    Reflect.defineProperty(this, 'getItem', {
        enumerable: false,
        value(key) {
            if (key in RESERVED_KEYS) {
                throw new Error(`Cannot get reserved key "${key}"`);
            }

            const item = this[key];

            return item || (item === '' ? item : null);
        }
    });

    Reflect.defineProperty(this, 'removeItem', {
        enumerable: false,
        value(key) {
            delete this[key];
        }
    });

    Reflect.defineProperty(this, 'clear', {
        enumerable: false,
        value() {
            for (const key in this) {
                if (this.hasOwnProperty(key)) {
                    delete this[key];
                }
            }
        }
    });
};

global.window.localStorage = new StorageShim();
