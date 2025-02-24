//Conceitos básicos JS

/*Utilizando switch case
let option = 3

switch(option){
    case 1:
        console.log("Você escolheu o número 1");
        break
    case 2:
        console.log("Você escolheu o número 2");
        break
    default:
        console.log("Error");
        break
} */


/* Somando utilizando função

function sum(name, x, y){
    let result = x + y
    console.log("olá", name, "A soma dos números é = ", result);
}

sum("leonardo", 7, 3) */


/* Manipulando DOM


let btn = document.querySelector("#btn")

btn.addEventListener("click", (e) => {
    e.preventDefault()
    alert("Você mudou a cor do botão")

    btn.classList.add("red")
}) */


/*Eventos em um elemento 

const form = document.getElementById("form")

form.addEventListener("onsubmit", (e) => {
    e.preventDefault()
    console.log("olá");
}) */





//Métodos de texto

/* Length tamanho do texto
const message = "bom dia leonardo!!"
console.log(message.length); */

/* Replace substitui 


const message = "olá leonardo"
console.log(message.replace("olá", "oi"));  */

/* Slice tira uma parte da string

const message = "ola leonardo"
console.log(message.slice(0, 7));

começa na posição 0 e termina na posição 7 */

/* Padstart tudo que eu quero mudar

const message = "bom dia leonardo"
console.log(message.padStart("variavel", "x")); */

/* Trim Removo espaço em branco na string

const message = "olá leonardo"
console.log(message.trim()); */

/* Split(separa) join(junta) Separando e unindo strings 
const message = "estudar, aprender, praticar"
const separate = message.split(",")
console.log(separate);

const junta = separate.join(" e")
console.log(junta); */

/* IndexOf da a posição do indice por exemplo JS está a 16 casas do indice 0
const message = "estou estudando JS"
console.log(message.indexOf("JS")); */

/* Includes verifica se existe a palavra e retorna true ou false
const message = "bom dia leonardo"
console.log(message.includes("dia")); */





// Array

/* Push (adiciona item no array)

let user = []
user.push = "leo"
console.log(user); */

/* Unshift(adiciona item no inicio da lista) 
   Shift(remove o primeiro item da lista)
   Pop(remove o ultimo item da lista)


const user = ["leo", "nit", "pedro"]

user.unshift("ana")
console.log(user);

user.shift()
console.log(user);

user.pop()
console.log(user); */

/* Splice remove item do array

const frutas = ["banana", "maça", "mamao"]
frutas.splice(0, 1)
console.log(frutas); */

/* Includes verifica se existe o item no array
const fruta = ["maça"]
console.log(fruta.includes("maça")); */




// Repetição 

/* Loop For (repete te q a condiçãoo seja falsa)
for (i = 0; i < 10; i++){
    console.log(i); 
} */

/* For Of (percorre lista)

const names = ["leo", "nit"]

for(let i of names){
    console.log(i); 
} */

 





// ================== JS FRAMEWORK ==================

// JS Moderno

/* Desestruturação de array

const data = ["leo", "leo@gmail.com"]

const [username, email] = data
console.log(`name ${username} email ${email}`); */

/* Desestruturando obj

const users = {
    name: "leo",
    id: 22
}

const {name, id} = users
console.log(name, id); */



// --------------- Metodos de array -----------------

/* Map() - Percorre os itens 

const users = ["leo", "nit", "pedro"]
users.map((user) => {
    console.log(user);
    
}) */

/* Filter() - Cria um novo array com os itens que passaram na condição 

const users = ["leo", "nit", "pedro"]

const result = users.filter((user) => {
    user.length > 2
})
console.log(result); */

/* FindIndex() - Retorna o indice do primeiro elemento que satisfaz a condiçaõ

const values = [1, 5, 10, 20]

console.log(values.findIndex((value) => value > 10)); */

/* Find() - Retorna o valor do primeiro elemento que satisfaz a condição

const users = ["leo", "niolas", "oi"]

const result = users.find((user) => user.length >= 3)
console.log(result); */

/* Every() - Testa se todos elementos do array passa na condição

const users = ["leo", "niolas", "oi"]

const result = users.every((user) => user.length >= 2)

console.log(result); */

/* Some() - Testa se ao menos um elemento passa na condição

const users = ["leo", "niolas", "oi"]
const result = users.some((user) => user.length > 3)

console.log(result); */

/* Reduce() - Reduzir o array para um unico valor

const vendas = [650, 550, 1020, 1060, 200, 150, 495, 875];

const maiorValor = vendas.reduce((maiorValor, elementoAtual) => {
  return maiorValor > elementoAtual ? maiorValor : elementoAtual;
}, 0);

console.log(maiorValor); */










