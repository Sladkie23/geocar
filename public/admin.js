//переменные

const imageInput = document.getElementById("image-input")
const carImage = document.getElementById("car-image")


//отображение картинки после загрузки

imageInput.addEventListener("input",(event)=> {
    let reader = new FileReader();
    reader.onload = function() {
        carImage.src = reader.result;
        carImage.style.display = 'block';
    };
    reader.readAsDataURL(event.target.files[0]);
})




