const userName = document.querySelector(`.name`)
const scoreUser = document.querySelector(`.user-score`)
const compscore = document.querySelector(`.compyuter-score`)
const manzil1 = document.querySelector(`.muntarija`)
const manzil2 = document.querySelector(`.user-select`)
const manzil3 = document.querySelector(`.user-select`)
const buttonrock = document.querySelector(`.rock`)
const durang = document.querySelector(`.durang`)
const tosh = document.querySelector(`.tosh`)
const qaychi = document.querySelector(`.qaychi`)
const qogoz = document.querySelector(`.qogoz`)
const toshcampyuter = document.querySelector(`.toshcampyuter`)
const qaychicampyuter = document.querySelector(`.qaychicampyuter`)
const qogozcampyuter = document.querySelector(`.qogozcampyuter`)
const galaba = document.querySelector(`.galaba`)
const maglibsiz = document.querySelector(`.yutqazdingiz`)
const buttonpapaer = document.querySelector(`.paper`)
const buttonqaychi = document.querySelector(`.Scissors`)
const newname = prompt(`ismingizni kriting`)
userName.textContent = newname
buttonrock.addEventListener(`click`, rock => {
    const rendomNumbers = Math.ceil(Math.random() * 3)
    const rock2 = 3 
    tosh.style.display = `block`
    qaychi.style.display = `none`
    qogoz.style.display = `none`
    if (rendomNumbers === rock2){
        durang.style.display = `block`
        galaba.style.display = `none`
        maglibsiz.style.display = `none`
      

    }else if (rendomNumbers < rock2){
        galaba.style.display = `block`
        durang.style.display = `none`
        maglibsiz.style.display = `none`
        
    }
    console.log(rock2, rendomNumbers)
})
buttonrock.addEventListener(`click`, rock22 => {
    const rendomNumbers = Math.ceil(Math.random() * 3)
    const rock2 = 3
    const comscor11 = document.createElement(`Number`)
    compscore.appendChild(comscor11)
    if (rendomNumbers === 1){
        galaba.style.display = `block`
        durang.style.display = `none`
        qogozcampyuter.style.display = `block`
        toshcampyuter.style.display = `none`
        qaychicampyuter.style.display = `none`   
        maglibsiz.style.display = `none`
        galaba.style.display = `none`
        comscor11 + 1
        durang.style.display = `none`
    }
    else if (rendomNumbers === 2){
        qogozcampyuter.style.display = `none`
        toshcampyuter.style.display = `none`
        qaychicampyuter.style.display = `block`
    }
    else if (rendomNumbers === 3){
        qogozcampyuter.style.display = `none`
        toshcampyuter.style.display = `block`
        qaychicampyuter.style.display = `none`
    }
})
buttonqaychi.addEventListener(`click`, rock => {
    const rendomNumbers = Math.ceil(Math.random() * 3)
    const rock2 = 2
    tosh.style.display = `none`
    qaychi.style.display = `block`
    qogoz.style.display = `none`
    if (rendomNumbers === rock2){
        durang.style.display = `block`
        galaba.style.display = `none`
        maglibsiz.style.display = `none`
    }else if (rendomNumbers < rock2){
        galaba.style.display = `block`
        durang.style.display = `none`
        maglibsiz.style.display = `none`
    }
    console.log(rock2, rendomNumbers)
})
buttonqaychi.addEventListener(`click`, rock22 => {
    const rendomNumbers = Math.ceil(Math.random() * 3)
    const rock2 = 2
    if (rendomNumbers === 1){
        qogozcampyuter.style.display = `block`
        toshcampyuter.style.display = `none`
        qaychicampyuter.style.display = `none`   
        maglibsiz.style.display = `none`
        galaba.style.display = `block`
        durang.style.display = `none`
    }
    else if (rendomNumbers === 2){
        qogozcampyuter.style.display = `none`
        toshcampyuter.style.display = `none`
        qaychicampyuter.style.display = `block`
    }
    else if (rendomNumbers === 3){
        qogozcampyuter.style.display = `none`
        toshcampyuter.style.display = `block`
        qaychicampyuter.style.display = `none`
        galaba.style.display = `none`
        durang.style.display = `none`
        maglibsiz.style.display = `block`
    }
})
buttonpapaer.addEventListener(`click`, rock => {
    const rendomNumbers = Math.ceil(Math.random() * 3)
    const rock2 = 1
    tosh.style.display = `none`
    qaychi.style.display = `none`
    qogoz.style.display = `block`
    if (rendomNumbers === rock2){
        durang.style.display = `block`
        galaba.style.display = `none`
        maglibsiz.style.display = `none`
    }else if (rendomNumbers === 2){
        galaba.style.display = `none`
        durang.style.display = `none`
        maglibsiz.style.display = `block`
    }else if (rendomNumbers === 3){
        galaba.style.display = `block`
        durang.style.display = `none`
        maglibsiz.style.display = `none`
    }
    console.log(rock2, rendomNumbers)
})
buttonpapaer.addEventListener(`click`, rock22 => {
    const rendomNumbers = Math.ceil(Math.random() * 3)
    const rock2 = 1
    if (rendomNumbers === 1){
        qogozcampyuter.style.display = `block`
        toshcampyuter.style.display = `none`
        qaychicampyuter.style.display = `none`   
        maglibsiz.style.display = `none`
        galaba.style.display = `none`
        durang.style.display = `block`
    }
    else if (rendomNumbers === 2){
        qogozcampyuter.style.display = `none`
        toshcampyuter.style.display = `none`
        qaychicampyuter.style.display = `block`
    }
    else if (rendomNumbers === 3){
        qogozcampyuter.style.display = `none`
        toshcampyuter.style.display = `block`
        qaychicampyuter.style.display = `none`
        galaba.style.display = `block`
        durang.style.display = `none`
        maglibsiz.style.display = `none`
    }
})
buttonqaychi.addEventListener(`click`, dfsdf => {
if (durang.value == `YUTQAZDINGIZ`){
    
}else {
    let dda = Number(0)
    const scor11 = document.createElement(`Number`)
    scoreUser.appendChild(scor11)
    scor11.innerHTML = dda + 1
}
})
