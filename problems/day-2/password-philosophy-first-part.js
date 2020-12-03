const fs = require('fs');

const content = fs.readFileSync('problems/day-2/input.txt', 'utf8')
const inputs = content.split('\n');

let validPasswords = 0;

for (const input of inputs) {
    const [passwordPolicy, password] = input.split(':');
    const updatedPassword = password.trim();

    const [lowHigh, minChar] = passwordPolicy.split(' ');
    const [lowLen, highLen] = lowHigh.split('-');

    let len = 0;
    updatedPassword.toLowerCase().split('').map(ch => {
        if (ch === minChar.toLowerCase()) len++;
    });

    if (len >= lowLen && len <= highLen) validPasswords++;
}

console.log(validPasswords);