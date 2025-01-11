//Conceitos básicos JS

//Utilizando switch case
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
}

// Somando utilizando função 
function sum(name, x, y){
    let result = x + y
    console.log("olá", name, "A soma dos números é = ", result);
}

sum("leonardo", 7, 3)