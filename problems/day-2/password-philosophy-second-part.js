const fs = require('fs');

const content = fs.readFileSync('problems/day-2/input.txt', 'utf8')
const inputs = content.split('\n');

let validPasswords = 0;

for (const input of inputs) {
    const [passwordPolicy, password] = input.split(':');
    const updatedPassword = password.trim();

    const [charPos, minChar] = passwordPolicy.split(' ');
    const [present, notPresent] = charPos.split('-');

    let firstPosContain = false;
    let secondPosContain = false;

    updatedPassword.toLowerCase().split('').map((ch, index) => {
        if (index + 1 === parseInt(present) && ch === minChar.toLowerCase()) firstPosContain = true;
        if (index + 1 === parseInt(notPresent) && ch === minChar.toLowerCase()) secondPosContain = true;
    });

    if ((firstPosContain && !secondPosContain) || (!firstPosContain && secondPosContain)) validPasswords++;
}

console.log(validPasswords);