const { CinCheck: cc } = require("./cinCheck");

const contains = (text, pattern) => text.indexOf(pattern) >= 0;

describe('properties', () => {
    test('should always contain itself', () => {
        cc.property(cc.string(), text => {
            expect(contains(text, text)).toBe(true);
        });
    });

    test('should always contains its substrings', () => {
        cc.property(cc.string(), cc.string(), cc.string(), (a, b, c) => {
            expect(contains(a + b + c, b)).toBe(true);
        })
    })
})