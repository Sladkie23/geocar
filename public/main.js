////////////////////////Получение машин из базы//////////////////////////////

const url = "getCars.php"

const getResource = async(url) => {
    const response = await fetch(url)

    if (response.ok != true) {
        console.log("Connection failed!")
    } else {
        return await response.json()
    }
}


////////////////////////Отображение машин из БД в HTML///////////////////////////



const carList = document.querySelector(".car__list")

document.addEventListener("DOMContentLoaded", () => {
   async function CarsLoad() {
        return await getResource(url).then(
            (data)=>{
                data.forEach(element => {
                    let carCard = document.createElement("div")
                    carList.insertAdjacentElement("afterbegin", carCard)
                    carCard.setAttribute("class", "car__card")
                    carCard.setAttribute("id", element[0])
        
        
                    let rentButton = document.createElement("div")
                    carCard.insertAdjacentElement("afterbegin", rentButton)
                    rentButton.setAttribute("class", "rent__button")
                    rentButton.setAttribute("photo1", element[1])
                    rentButton.setAttribute("photo2", element[2])
                    rentButton.setAttribute("photo3", element[3])
                    rentButton.setAttribute("photo4", element[4])
                    rentButton.setAttribute("year", element[6])
                    rentButton.setAttribute("engine", element[7])
                    rentButton.setAttribute("price", element[8])
                    
                    let rentbuttonP = document.createElement("p")
                    rentbuttonP.textContent = "RENT"
                    let rentButtonArrow = document.createElement("img")
                    rentButtonArrow.setAttribute("src", "/materials/images/Arrow_icon 1.png")
                    rentButton.insertAdjacentElement("afterbegin", rentButtonArrow)
                    rentButton.insertAdjacentElement("afterbegin", rentbuttonP)
                
                    carInfo = document.createElement("div")
                    carCard.insertAdjacentElement("afterbegin", carInfo)
                    carInfo.setAttribute("class", "car__info")
                    let p1 = document.createElement("p")
                    p1.textContent = element[5]
                    let p2 = document.createElement("p")
                    p2.textContent = element[6]
                    let p3 = document.createElement("p")
                    p3.textContent = element[7]
                    carInfo.insertAdjacentElement("afterbegin", p3)
                    carInfo.insertAdjacentElement("afterbegin", p2)
                    carInfo.insertAdjacentElement("afterbegin", p1)
        
                    let carImage = document.createElement("div")
                    carCard.insertAdjacentElement("afterbegin", carImage)
                    carImage.setAttribute("class", "car__image")
                    let carImageTag = document.createElement("img")
                    carImageTag.setAttribute("src", element[1])
                    carImage.insertAdjacentElement("afterbegin", carImageTag)
    
                    const rentButtonView = document.querySelectorAll(".rent__button")
                    const rentPopUpBg = document.querySelector(".rent__pop__up__bg")
                    const rentPopUpBgCont = document.querySelector(".rent__pop__up__bg__container")
                    const cross = document.querySelector(".cross")

                    for (let i = 0; i < rentButtonView.length; i++) {
                        let cardButton = rentButtonView[i];
                        cardButton.addEventListener("click", ()=>{
                            rentPopUpBg.setAttribute("class", "rent__pop__up__bg")
                            rentPopUpBgCont.setAttribute("class", "rent__pop__up__bg__container")
                        }) 
                    }
        
                    cross.addEventListener("click", ()=>{
                        rentPopUpBg.setAttribute("class", "rent__pop__up__bg no-vision")
                        rentPopUpBgCont.setAttribute("class", "rent__pop__up__bg__container no-vision")
                    })
                });
                let buttonsRent = document.querySelectorAll(".rent__button")
                const arrows = document.querySelectorAll(".arrows img")

                for (let i = 0; i < buttonsRent.length; i++) {
                    buttonsRent[i].addEventListener("click", ()=> {
                        let popUpYear = document.getElementById("pop-up-year")
                        let popUpEngine = document.getElementById("pop-up-engine")
                        let popUpPrice = document.querySelector(".price p")
                        let rpuContainerImg = document.querySelector(".rpu__container img")
                        popUpYear.innerHTML = `<b>Year of release</b><br>${buttonsRent[i].getAttribute("year")}`
                        popUpEngine.innerHTML = `<b>Engine:</b><br>${buttonsRent[i].getAttribute("engine")}`
                        popUpPrice.innerHTML = `<b>${buttonsRent[i].getAttribute("price")}</b> GEL`
                        rpuContainerImg.setAttribute("src", buttonsRent[i].getAttribute("photo1"))

                        const cross = document.querySelector(".cross")
                        let photoCount = 1
                        cross.addEventListener("click",()=>{
                            photoCount = 1
                        })

                        arrows[0].addEventListener("click", ()=>{
                            if (rpuContainerImg.getAttribute("src") != buttonsRent[i].getAttribute("photo1") && photoCount > 1) {
                                rpuContainerImg.setAttribute("src", buttonsRent[i].getAttribute(`photo${photoCount - 1}`))
                                photoCount = photoCount - 1
                                console.log(photoCount)
                            }
                        })
                        arrows[1].addEventListener("click", ()=>{
                            if (rpuContainerImg.getAttribute("src") != buttonsRent[i].getAttribute("photo4") && photoCount < 4) {
                                rpuContainerImg.setAttribute("src", buttonsRent[i].getAttribute(`photo${photoCount + 1}`))
                                photoCount = photoCount + 1
                                console.log(photoCount)
                            }
                        })
                    })
                    
                }
            }
        )
    }
    CarsLoad()
})









