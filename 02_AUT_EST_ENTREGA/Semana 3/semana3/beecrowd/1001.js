var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
console.log(typeof lines[1]);

//o código a seguir é que irá para o Bee Crowd
var A = parseInt(lines.shift());
var B = parseInt(lines.shift());

var X = A + B;

console.log('X = ' + X);