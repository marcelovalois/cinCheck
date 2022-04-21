class CinCheck {
    constructor() {}

    static property (num, callback) {
        callback(num);
    }
}

const random = Math.random();
CinCheck.property(random, data => console.log(data))

// string, integer, nat, boolean, number