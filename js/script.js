
const imagenes = ["", "./images/img5.jpeg", "./images/car-2.jpg", "./images/cats.jpg","./images/descarga.png"]
const btnRight = document.getElementById("btnR")

const img1 = document.getElementById("img1")
const img2 = document.getElementById("img2")
const img3 = document.getElementById("img3")
const img4 = document.getElementById("img4")

const card =[img1,img2,img3,img4]

btnRight.addEventListener("click", () =>{
    let counter = (iterableFunction.next().value)
    console.log(counter)
    card[counter].src = imagenes[counter]

})

function* myFirstGeneratorFunction() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

const iterableFunction = myFirstGeneratorFunction();
