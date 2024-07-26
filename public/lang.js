const langSelect = document.querySelector(".lang__select")
const lang = document.querySelector(".lang")
const langPos = document.querySelectorAll(".lang__pos")

lang.addEventListener("click", ()=> {
    if (langSelect.getAttribute("class") == "lang__select") {
        langSelect.setAttribute("class", "lang__select lang__select__animation")
        setTimeout(()=> {
            for (let i = 0; i < langPos.length; i++) {
                langPos[i].setAttribute("class", "lang__pos lang__pos__animation")
            }
        }, 450)
    } else {
        langSelect.setAttribute("class", "lang__select")
        for (let i = 0; i < langPos.length; i++) {
            langPos[i].setAttribute("class", "lang__pos")
        }
    }
})

document.addEventListener("mouseup", (event)=> {
    if (event.target.textContent != "LANGUAGE") {
        langSelect.setAttribute("class", "lang__select")
        for (let i = 0; i < langPos.length; i++) {
            langPos[i].setAttribute("class", "lang__pos")
        }
    }
})