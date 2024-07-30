const langSelect = document.querySelectorAll(".lang__select")
const lang = document.querySelectorAll(".lang")
const langPos = document.querySelectorAll(".lang__pos")

for (let i = 0; i < lang.length; i++) {
    lang[i].addEventListener("click", ()=> {
        if (langSelect[i].getAttribute("class") == "lang__select") {
            langSelect[i].setAttribute("class", "lang__select lang__select__animation")
            setTimeout(()=> {
                for (let i = 0; i < langPos.length; i++) {
                    langPos[i].setAttribute("class", "lang__pos lang__pos__animation")
                }
            }, 450)
        } else {
            langSelect[i].setAttribute("class", "lang__select")
            for (let i = 0; i < langPos.length; i++) {
                langPos[i].setAttribute("class", "lang__pos")
            }
        }
    })
}


const HOME = document.getElementById("HOME")
const OURCARS = document.getElementById("OURCARS")
const CONTACTS = document.getElementById("CONTACTS")
const LANGUAGE = document.getElementById("LANGUAGE")
const RENTCARINTBILISI = document.getElementById("RENTCARINTBILISI")
const FASTANDEASYBOOKING = document.getElementById("FASTANDEASYBOOKING")
const noticeP1 = document.getElementById("noticeP1")
const MANYPICKUPLOCATION = document.getElementById("MANYPICKUPLOCATION")
const noticeP2 = document.getElementById("noticeP2")
const SAFETRAVELS = document.getElementById("SAFETRAVELS")
const noticeP3 = document.getElementById("noticeP3")
const CARSFORRENT = document.getElementById("CARSFORRENT")
const CALLTODAY = document.getElementById("CALLTODAY")
const OURLOCATION = document.getElementById("OURLOCATION")
const HOURS = document.getElementById("HOURS")


for (let i = 0; i < langPos.length; i++) {
    langPos[i].addEventListener("click", ()=> {
        if(langPos[i].getAttribute("id")== "eng") {
            HOME.innerHTML = `<img src="/materials/images/Head_HomeIcon.png">HOME`
            OURCARS.innerHTML = `<img src="/materials/images/Head_CarIcon.png"><a href="#mclc">OUR CARS</a>`
            CONTACTS.innerHTML = `<img src="/materials/images/Head_ContIocn.png"><a href="#cbc">CONTACTS</a>`
            LANGUAGE.innerHTML = `LANGUAGE<img src="/materials/images/Head_LangIcon.png">`
            RENTCARINTBILISI.innerHTML = `Rent Car in<br> Tbilisi`
            FASTANDEASYBOOKING.innerHTML = `Fast & Easy Booking`
            noticeP1.innerHTML = `Effortless Reservations Await! Skip the clicks and dial into simplicity. Our Fast & Easy Booking ensures instant access to your dream ride. Reach us with a quick call, and let the journey begin. Swift reservations, personalized service – because your travel plans deserve a human touch. Connect with us now for a seamless road ahead!`
            MANYPICKUPLOCATION.innerHTML = `Many Pickup Locations`
            noticeP2.innerHTML = `Diverse Destinations, One Stop! Explore the freedom of choice with our Many Pickup Locations. From city centers to airports, we’ve got you covered. No matter where you are, your journey begins at your convenience. Discover the ease of multiple options – because the road to your adventure starts where you are. Find your ideal pickup point and let the exploration unfold!`
            SAFETRAVELS.innerHTML = `Safe Travels`
            noticeP3.innerHTML = `Family adventures made secure! Our commitment to safety extends to the youngest members of your crew. Introducing our Baby Seat Service – ensuring your little explorers ride in comfort and security. Choose peace of mind for every journey, knowing that we prioritize the safety of your precious passengers. Elevate your family travel experience with our hassle-free Baby Seat Service.`
            CARSFORRENT.innerHTML = `CARS FOR RENT`
            CALLTODAY.innerHTML = `Call Today For Booking Your Next Ride`
            OURLOCATION.innerHTML = `Our Location<img src="/materials/images/Loc_Gps.png">`
            HOURS.innerHTML = `<b>Hours:</b><br><br>24/7 whole week`
        } else if (langPos[i].getAttribute("id") == "geo") {
            HOME.innerHTML = `<img src="/materials/images/Head_HomeIcon.png">მთავარი`
            OURCARS.innerHTML = `<img src="/materials/images/Head_CarIcon.png"><a href="#mclc">კატალოგი</a>`
            CONTACTS.innerHTML = `<img src="/materials/images/Head_ContIocn.png"><a href="#cbc">კონტაქტები</a>`
            LANGUAGE.innerHTML = `ᲔᲜᲐ<img src="/materials/images/Head_LangIcon.png">`
            RENTCARINTBILISI.innerHTML = `ქირავდება მანქანა <br>თბილისში`
            FASTANDEASYBOOKING.innerHTML = `მარტივი დაჯავშნა`
            noticeP1.innerHTML = `უპრობლემოდ დაჯავშნა გელოდებათ! გამოტოვეთ დაწკაპუნებები და აკრიფეთ სიმარტივე`
            MANYPICKUPLOCATION.innerHTML = `ბევრი პიკაპის ადგილი`
            noticeP2.innerHTML = `მრავალფეროვანი მიმართულებები, ერთი გაჩერება! გამოიკვლიეთ არჩევანის თავისუფლება ჩვენი მრავალი პიკაპის ლოკაციებით`
            SAFETRAVELS.innerHTML = `უსაფრთხო მოგზაურობა`
            noticeP3.innerHTML = `საოჯახო თავგადასავლები დაცულია! ჩვენი ვალდებულება უსაფრთხოების მიმართ ვრცელდება თქვენი ეკიპაჟის ყველაზე ახალგაზრდა წევრებზე`
            CARSFORRENT.innerHTML = `ქირავდება მანქანები`
            CALLTODAY.innerHTML = `დარეკეთ დღეს თქვენი შემდეგი მოგზაურობის დასაჯავშნად`
            OURLOCATION.innerHTML = `მდებარეობა<img src="/materials/images/Loc_Gps.png">`
            HOURS.innerHTML = `<b>საათები:</b><br><br>24/7 მთელი კვირა`
        } else if (langPos[i].getAttribute("id") == "rus") {
            HOME.innerHTML = `<img src="/materials/images/Head_HomeIcon.png">ГЛАВНАЯ`
            OURCARS.innerHTML = `<img src="/materials/images/Head_CarIcon.png"><a href="#mclc">МАШИНЫ</a>`
            CONTACTS.innerHTML = `<img src="/materials/images/Head_ContIocn.png"><a href="#cbc">КОНТАКТЫ</a>`
            LANGUAGE.innerHTML = `ЯЗЫК<img src="/materials/images/Head_LangIcon.png">`
            RENTCARINTBILISI.innerHTML = `Аренда машин<br>в Тбилиси`
            FASTANDEASYBOOKING.innerHTML = `Быстро и легко!`
            noticeP1.innerHTML = `Мы стремились упростить процесс аренды. Всё проще, чем кажется. Свяжитесь с нами в один звонок или сообщение и ваше путешествие начнется.`
            MANYPICKUPLOCATION.innerHTML = `Удобное расположение`
            noticeP2.innerHTML = `Нам было крайне важно, чтобы вам было удобно арендовать авто, поэтому удобный пункт выдачи авто позволяет добраться до вашей машины максимально быстро из любой точки`
            SAFETRAVELS.innerHTML = `Безопасные путешествия`
            noticeP3.innerHTML = `Семейные приключения в безопасности! Наша приверженность безопасности распространяется и на самых юных членов вашего экипажа. Представляем нашу услугу детского сиденья, обеспечивающую комфорт и безопасность ваших маленьких исследователей`
            CARSFORRENT.innerHTML = `МАШИНЫ ДЛЯ АРЕНДЫ`
            CALLTODAY.innerHTML = `Звоните сегодня, чтобы забронировать ваше следующее путешествие`
            OURLOCATION.innerHTML = `Мы на карте<img src="/materials/images/Loc_Gps.png">`
            HOURS.innerHTML = `<b>Часы:</b><br><br>24/7 Всю неделю`
        }
    })
}  

