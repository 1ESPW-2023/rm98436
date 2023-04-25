<<<<<<< HEAD
//Exemplo de Funções
=======
// //Exemplo de Funções
>>>>>>> main
// const divElement = document.getElementById("div-box")

// // divElement.addEventListener("click", ()=>{
// //     console.log(divElement);
// // });

// divElement.addEventListener("click", mostraElemento);

<<<<<<< HEAD
=======

>>>>>>> main
// function mostraElemento() {
//     console.log(divElement)
// }

// function soma() {
//     let n1 = 10
//     let n2 = 5
//     console.log(n1 + n2)
// }
<<<<<<< HEAD

//Recuperando Elementos do HTML com querySelector
// const liElement = document.querySelectorAll("li");

// //Convertendo Node List em Array com Spread
// const arrayElement = [...liElement];


// console.log(liElement);


// const liElement = document.querySelectorAll("li");

//Convertendo Node List em Array com Spread
// const arrayElement = [...document.querySelectorAll("li")];

// arrayElement.map((el,key)=>{
//     if(el.innerText.indexOf_)("1",0) 
//         el.textContent = `[ ${el.textContent}"Item-1"]`;
    

// });


=======
 

// //Recuperando elementos do HTML com querySelector
// const liElements = document.querySelector("#item");
// console.log(liElements);


// //Recuperando elementos do HTML com querySelectorAll
// const liElements = document.querySelectorAll("li");
// //CONVERTENDO NODE LIST EM ARRAY COM SPREAD
// const arrayElements = [...liElements];
// console.log(arrayElements);

//CONVERTENDO NODE LIST EM ARRAY COM SPREAD
// const arrayElements = [...document.querySelectorAll("li")];

// arrayElements.map((el,key)=>{

//     if (el.textContent.indexOf("1") != (-1)) {
//         el.textContent = `[ ${el.textContent} ]`;
//     }
// });
>>>>>>> main
let tmp = 0;


function mudaCor() {
    let r = Math.ceil(Math.random()*255);
    let g = Math.ceil(Math.random()*255);
    let b = Math.ceil(Math.random()*255);
    
    const elemento = [...document.getElementsByClassName("conteudo")];
    elemento.forEach( (el)=>{
        el.style.backgroundColor = `rgb(${r},${g},${b})`;
    } )

<<<<<<< HEAD
   tmp = setTimeout(mudaCor, 5000);

}

function pararTimeOut() {
    clearTimeout(tmp);
=======
   tmp = setTimeout(mudaCor, 1000);

>>>>>>> main
}

mudaCor()
