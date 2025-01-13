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



