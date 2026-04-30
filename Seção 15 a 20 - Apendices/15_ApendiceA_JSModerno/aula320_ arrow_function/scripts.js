// Aula 320 * 1 - arrow function

console.log("--------------------");

const sum = function sum(a, b) {
	return a + b;
};

// const arrowSum = (a, b) => {
// 	return a + b;
// };

const arrowSum = (a, b) => a + b;

console.log("A soma tem como resultado ", sum(5, 5));
console.log("A soma tem como resultado ", arrowSum(5, 5));

console.log("--------------------");

const greeting = (name) => {
	if (name) {
		return "Hi " + name + "!";
	} else {
		return "Olá!";
	}
};

console.log(greeting("Lewis Hamilton"));
console.log(greeting());

console.log("--------------------");

const testeArrow = () => console.log("testou com a testa, sqn!");

testeArrow();

console.log("--------------------");

const user = {
	name: "Lionel Messi",
	sayUserName() {
		var self = this;
		setTimeout(function () {
			console.log(self);
			console.log("Username: " + self.name);
		}, 500);
	},
	sayUserNameArrow() {
		setTimeout(() => {
			console.log(this);
			console.log("Username: " + this.name);
		}, 700);
	},
};

user.sayUserName();
user.sayUserNameArrow();
