class CinCheck {
    constructor() {}

    static integer() {
        let min = -10000;
        let max = 10000;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static float() {
        let min = -10000;
        let max = 10000;
        return Math.random() * (max - min + 1) + min;
    }

    static nat() {
        let min = 0;
        let max = 10000;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static boolean() {
        return Math.random() > 0.5 ? true : false;
    }

    static string() {
        let randomString = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let size = Math.floor(Math.random() * (25 - 10 + 1)) + 10;
        for (let i = 0; i < size; i++) {
            randomString += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return randomString;
    }

    static array(type) {
        const arraySize = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
        const array = []
        for (let i = 0; i < arraySize; i++) {
            array.push(type());
        }
        return array;
    }

    static property (num, callback) {
        callback(num);
    }
}

module.exports = { CinCheck };
