// Aula 319 * 1 - var, let e const

// var
console.log("--------var--------");

var x = 10;
var y = 15;

if (y > 10) {
	var x = 5;
	console.log("O valor de x é", x);
}
console.log("O valor de x é", x);

// let
console.log("--------let--------");

let a = 10;
let b = 15;

if (b > 10) {
	let a = 5;
	console.log("O valor de a é", a);
}
console.log("O valor de a é", a);

// for de valores
console.log("--------------------");

let i = 100;

console.log("Os valores de i são:");
for (let i = 0; i < 5; i++) {
	console.log(i);
}
console.log(i);

// function
console.log("--------------------");

function logName() {
	const name = "Peter Parker";
	console.log("O nome é ", name);
}

const name = "Miles Morales";

logName();

console.log("O nome é ", name);
