const rentButton = document.querySelectorAll(".rent__button")
const rentPopUpBg = document.querySelector(".rent__pop__up__bg")
const rentPopUpBgCont = document.querySelector(".rent__pop__up__bg__container")
const cross = document.querySelector(".cross")
const arrows = document.querySelectorAll(".arrows img")


for (let i = 0; i < rentButton.length; i++) {
    let cardButton = rentButton[i];
    cardButton.addEventListener("click", ()=>{
        rentPopUpBg.setAttribute("class", "rent__pop__up__bg")
        rentPopUpBgCont.setAttribute("class", "rent__pop__up__bg__container")
    }) 
}

cross.addEventListener("click", ()=>{
    rentPopUpBg.setAttribute("class", "rent__pop__up__bg no-vision")
    rentPopUpBgCont.setAttribute("class", "rent__pop__up__bg__container no-vision")
})

arrows[0].addEventListener("click", ()=>{
    console.log("left")
})
arrows[1].addEventListener("click", ()=>{
    console.log("right")
})