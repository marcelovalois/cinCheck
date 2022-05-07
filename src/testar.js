const cpfIsValid = (cpf) => {
    const verifier = (num) =>{
        if(num < 2) {
            return 0;
        } else {
            return 11-num;
        }
    }

    if(cpf.length === 11) {
        let firstDigit = 0;
        let secondDigit = 0;

        let count = 2;
        for(let i = 8; i >= 0; i--) {
            firstDigit = firstDigit + parseInt(cpf.substr(i,1)) * count;
            count++;
        }
        firstDigit = verifier(firstDigit%11) + '';

        count = 2;
        for(let i = 9; i >= 0; i--) {
            secondDigit = secondDigit + parseInt(cpf.substr(i,1)) * count;
            count++;
        }
        secondDigit = verifier(secondDigit%11) + '';

        if(cpf.substr(9,2) === firstDigit+secondDigit) {
            return true;
        } else {
            return false;
        } 
    }
}

// cpfIsValid(11297234456);
// cpfIsValid('06788721475');
// cpfIsValid('70605283427');
let x = cpfIsValid('12745678911')
console.log(x);
// cpfIsValid(11144477735);