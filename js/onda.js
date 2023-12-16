const onda1 = document.querySelector("#onda1")
const onda2 = document.querySelector("#onda2")
const onda3 = document.querySelector("#onda3")
const onda4 = document.querySelector("#onda4")
addEventListener('scroll',()=>{
    let rolagem = scrollY
    onda1.style.backgroundPositionX = 400 + rolagem * 2 +'px'
    onda2.style.backgroundPositionX = 250 + rolagem * -4 +'px'
    onda3.style.backgroundPositionX = 200 + rolagem * 2 +'px'
    onda4.style.backgroundPositionX = 50 + rolagem * -2 +'px'

})