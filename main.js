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

/*Replace substitui 


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



