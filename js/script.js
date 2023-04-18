//Exemplo de Funções
// const divElement = document.getElementById("div-box")

// // divElement.addEventListener("click", ()=>{
// //     console.log(divElement);
// // });

// divElement.addEventListener("click", mostraElemento);

// function mostraElemento() {
//     console.log(divElement)
// }

// function soma() {
//     let n1 = 10
//     let n2 = 5
//     console.log(n1 + n2)
// }

//Recuperando Elementos do HTML com querySelector
// const liElement = document.querySelectorAll("li");

// //Convertendo Node List em Array com Spread
// const arrayElement = [...liElement];


// console.log(liElement);


// const liElement = document.querySelectorAll("li");

//Convertendo Node List em Array com Spread
const arrayElement = [...document.querySelectorAll("li")];

arrayElement.map((el,key)=>{
    if(el.innerText.indexOf_)("1",0) {
        el.textContent = `[ ${el.textContent}"Item-1"]`;
    }

});
