const firstName = "Chico";
const anotherName = 1;
const x = true;

// obs: Tive que adicionar o any
// pq meu codigo acusava erro de Parameter 'name' implicitly has an 'any' type.
// qqr coisa add igual linha abaixo em vez da usada
// function greeting(name) {

// function greeting(name: any) {
// 	console.log("Olá " + name);
// }

function greeting(name: string) {
	console.log("Olá " + name);
}

greeting(firstName);
// greeting(anotherName);
// greeting(x);
