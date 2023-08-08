const dropdown = document.querySelector(`.dropdown`)
const bar = document.querySelector(`.nav-btn`)
const menu = document.querySelector(`.menu`)
const exit = document.querySelector(`.exit`)
const hero = document.querySelector(`.hero`)


bar.addEventListener(`click`, function() {
    dropdown.classList.toggle(`active`)
    if (menu.style.display = `none`){
        exit.style.display = `block`
    } else{
        menu.style.display = `block`
    }
})


