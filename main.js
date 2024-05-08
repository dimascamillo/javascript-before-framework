let body = document.querySelector("body");

// // Nullish Coalescing Operator

// const idadeAtual = 0;

// // 0, '', [], false, undefined, null => falsy
// // document.body.innerText = "Sua idade é: " + (idade || "Não Informado") //Sua é idade e: Não Informado

// // null, undefined
// body.innerText = "Sua idade é: " + (idadeAtual ?? "Não Informado"); // Sua é idade e: 0

// // Object

// const user = {
//   name: "Dimas",
//   idade: 27,
//   addres: {
//     street: "Rua 1",
//     number: 22,
//   },
// };

// body.innerText = "name" in user; // true
// body.innerText = "nickename" in user; // false

// body.innerText = Object.keys(user); // retorna um vetor com todas as chaves do objeto
// body.innerText = JSON.stringify(Object.values(user)); // retorna um vetor com todas os valores do objeto
// body.innerText = JSON.stringify(Object.entries(user)); // retorna um vetor com subvetores, que retorna 2 informacoes a primeira é a chave e a segunda é o valor

// // Desestruturação

// // const { name, idade: age, addres, nickname = "dimas" } = user;

// // body.innerText = JSON.stringify({ name, age, addres, nickname });

// function mostraIdade({ idade }) {
//   return idade;
// }

// body.innerText = mostraIdade(user);

// // Rest operator
// const { name, ...rest } = user;

// body.innerText = JSON.stringify(rest);

// const array = [1, 2, 3, 4, 5];

// const [first, , ...restArray] = array;

// body.innerText = JSON.stringify({ restArray });

// Short Syntax

// const name = "Dimas";
// const age = 20;

// const user = {
//   name,
//   age,
// };

// Optional Chaining

// const user = {
//   name: "Dimas",
//   age: 27,
//   address: {
//     street: "Rua 1",
//     number: 22,
//     showFullAddress() {
//       return "ok";
//     },
//   },
// };

// body.innerText = user.address?.zip?.code ?? "Não informado";
// body.innerText = user.address?.showFullAddress?.();

// const key = "name";

// body.innerText = user[key]; // Dimas

// Métodos de array

// const array = [1, 2, 3, 4, 5];

// for (const i of array) {
//   body.innerText += i;
// }

// array.forEach((item) => {
//   body.innerText += item;
// });

// const novoArray = array.map((item) => {
//   if (item % 2 === 0) {
//     return item * 10;
//   }

//   return item;
// });

// map, filter, every, some, find, findIndex, reduce --

// const novoArray = array
//   .filter((item) => item % 2 === 0)
//   .map((item) => item * 10);

// const todosOsItensSaoNumeros = array.every((item) => typeof item === "number");

// const peloMenosUmItemEumNumero = array.some((item) => typeof item !== "number");

// const dois = 2;

// const par = array.find((item) => item % dois === 0);

// const par = array.findIndex((item) => item % dois === 0);

// const soma = array.reduce((acc, item) => {
//   return acc + item;
// }, 0);

// body.innerText = JSON.stringify(soma);

// Promises

// fetch("https://api.github.com/users/dimascamillo")
//   .then((response) => {
//     return response.json();
//   })
//   .then((body) => {
//     console.log(body);
//   });

async function buscaDadosGithub() {
  try {
    const response = await fetch("https://api.github.com/users/dimascamillo");
    const bodyRequisition = await response.json();

    const { name } = bodyRequisition;

    console.log(name);

    return name;
  } catch (err) {
    console.err(err);
  }

  // fetch("https://api.github.com/users/dimascamillo")
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((body) => {
  //     console.log(body);
  //   });
}

// buscaDadosGithub();

buscaDadosGithub().then((name) => {
  console.log(`Meu nome é: ${name}`);
});
