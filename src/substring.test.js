const { CinCheck } = require("./cinCheck");

const contains = (text, pattern) => text.indexOf(pattern) >= 0;
const cpf = require('./geraCpf');
const cpfIsValid = require("./verifyCpf");

const cc = new CinCheck();

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


cc.addType('cpf', cpf);

describe('Cpf', () => {
    test('Should be valid cpf', () => {
        cc.property(cc.useType('cpf'), cpf => {
           expect(cpfIsValid(cpf)).toBe(true);
        })
    })
})
