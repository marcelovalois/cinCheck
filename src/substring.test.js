const { CinCheck: cc } = require("./cinCheck");

const contains = (text, pattern) => text.indexOf(pattern) >= 0;

describe('properties', () => {
    test('should always contain itself', () => {
        cc.property(cc.string(), text => {
            expect(contains(text, text)).toBe(false);
        });
    });
})