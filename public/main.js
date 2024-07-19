document.querySelector('form').addEventListener('submit', (event)=>{
    event.preventDefault()
    const data = {
        name: 'name',
        year: "year",
        price: 'price'
    }
    console.log(getData('/getCars.php', data))
})

const getData = async(url)=> {
    const response = await fetch(url, {
        method: 'GET',
    })
    if (!response.ok) {
        throw new Error(`Error on address ${url}, error status ${response}`)
    }
    console.log(response)
}







const body = document.querySelector("body")


let vehicleCard = document.createElement("div")
vehicleCard.setAttribute("class", "vehicle-card")
let carPic = document.createElement("div")
carPic.setAttribute("class", "car-pic")
let pic = document.createElement("img")
pic.setAttribute("class", "pic")
let carName = document.createElement("p")
let carYear = document.createElement("p")
let carPrice = document.createElement("p")
carName.setAttribute("class", "name")
carYear.setAttribute("class", "year")
carPrice.setAttribute("class", "price")
carPic.setAttribute("class", "car-pic")
body.insertAdjacentElement("afterbegin",vehicleCard)
vehicleCard.insertAdjacentElement("afterbegin", carPic)
carPic.insertAdjacentElement("afterbegin", pic)
vehicleCard.insertAdjacentElement("beforeend", carName)
vehicleCard.insertAdjacentElement("beforeend", carYear)
vehicleCard.insertAdjacentElement("beforeend", carPrice)

