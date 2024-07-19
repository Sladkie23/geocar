"use strict"
//переменные

const imageInput = document.getElementById("imageInput")
const carImage = document.getElementById("carImage")
const form = document.getElementById('form')

//отображение картинки после загрузки

imageInput.addEventListener("input",(event)=> {
    let reader = new FileReader();
    reader.onload = function() {
        carImage.src = reader.result;
        carImage.style.display = 'block';
    };
    reader.readAsDataURL(event.target.files[0]);
})




//  Отправка данных на сервер

form.addEventListener('submit',(event)=>{
    event.preventDefault()
    const data = {
        name: document.getElementById('name').value,
        year: document.getElementById('date').value,
        price: document.getElementById('price').value,
    }
    return sendData('./addcar.php', data)
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



