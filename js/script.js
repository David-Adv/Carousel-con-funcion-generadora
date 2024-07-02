
const imagenes = ["", "./images/img5.jpeg", "./images/car-2.jpg", "./images/cats.jpg","./images/descarga.png"]
let btnRight = document.getElementById("btnR")
let img1 = document.getElementById("img1")
let img2 = document.getElementById("img2")
let img3 = document.getElementById("img3")
let img4 = document.getElementById("img4")

let card =[img1,img2,img3,img4]


btnRight.addEventListener("click", () =>{
    let counter = (iterableFunction.next().value)
    console.log(counter)
    card[counter].src = imagenes[counter]

})


// let btnLeft = document.getElementById("btnL")


// btnLeft.addEventListener("click", () =>{
//     console.log(iterableFunction.next().value)
// })



function* myFirstGeneratorFunction() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}
//returns a special iterator object
const iterableFunction = myFirstGeneratorFunction();
// console.log(iterableFunction.next().value) //output 2
// console.log(iterableFunction.next().value) //output 3
// console.log(iterableFunction.next().value) //output 4
// for(let data of iterableFunction) {
//      console.log(data)         // output 1 2 3 4
// }