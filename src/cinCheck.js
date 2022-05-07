class CinCheck {
    constructor() {
        this.types = {};
    }

    addType(typeName, callback) {
        this.types[typeName] = callback;
    }

    useType(typeName) {
        const callback = this.types[typeName];
        return callback();
    }

    integer() {
        let min = -10000;
        let max = 10000;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    float() {
        let min = -10000;
        let max = 10000;
        return Math.random() * (max - min + 1) + min;
    }

    nat() {
        let min = 0;
        let max = 10000;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    boolean() {
        return Math.random() > 0.5 ? true : false;
    }

    string() {
        let randomString = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let size = Math.floor(Math.random() * (25 - 10 + 1)) + 10;
        for (let i = 0; i < size; i++) {
            randomString += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return randomString;
    }

    array(type) {
        const arraySize = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
        const array = []
        for (let i = 0; i < arraySize; i++) {
            array.push(type());
        }
        return array;
    }

    property() {
        const len = arguments.length;
        const callback = arguments[len-1];
        const args = [];
        for (let i = 0; i < len-1; i++)
            args.push(arguments[i]);
        
        callback.apply(null, args);
    }
}

module.exports = { CinCheck };
