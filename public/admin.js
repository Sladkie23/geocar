//переменные

const imageInput = document.getElementById("imageInput")
const carImage = document.getElementById("carImage")

//отображение картинки после загрузки

imageInput.addEventListener("input",(event)=> {
    let reader = new FileReader();
    reader.onload = function() {
        carImage.src = reader.result;
        carImage.style.display = 'block';
    };
    reader.readAsDataURL(event.target.files[0]);
})




//  Сбор данных из html

ocument.querySelector(`form`).addEventListener("submit", function(event) {
    event.preventDefault()

    const data = {
        photo: carImage,
        name: document.getElementById(`name`).value,
        date: document.getElementById(`date`).value,
        price: document.getElementById(`price`).value
    }
    console.log(data)

    sendForm(data)
})

async function sendForm(data) {
    const res = await fetch('./admin_add_car.php', {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(data)
    })
}



