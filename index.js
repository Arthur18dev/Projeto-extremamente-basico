var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function soma(a, b) {
    return a + b;
}

let a = parseInt(lines[0]); 
let b = parseInt(lines[1]); 


let resultado = soma(a, b);
console.log('X = ' + resultado);  