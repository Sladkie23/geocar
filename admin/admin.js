"use strict"
//переменные
const form = document.getElementById('form')
//  Отправка данных на сервер

form.addEventListener('submit',(event)=>{
    event.preventDefault()
    const data = {
        photo1: document.getElementById("photo1").value,
        photo2: document.getElementById("photo2").value,
        photo3: document.getElementById("photo3").value,
        photo4: document.getElementById("photo4").value,
        name: document.getElementById("name").value,
        year: document.getElementById("year").value,
        engine: document.getElementById("engine").value,
        price: document.getElementById("price").value
    }
    document.getElementById("photo1").value = ""
    document.getElementById("photo2").value = ""
    document.getElementById("photo3").value = ""
    document.getElementById("photo4").value = ""
    document.getElementById("name").value = ""
    document.getElementById("year").value = ""
    document.getElementById("engine").value = ""
    document.getElementById("price").value = ""
    alert("Car added!")
    
    return sendData('/addcar.php', data)
})


const sendData = async(url, data) => {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
    })
    if (!response.ok) {
        throw new Error(`Error on address ${url}, error status ${response}`)
    }
    return true
}



