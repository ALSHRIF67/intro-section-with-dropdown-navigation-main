const phones = document.querySelector('.phoneicon')
const nav = document.querySelector('nav')
phones.addEventListener('click', () => {
    phones.classList.toggle('open')
    nav.classList.toggle('open')
})


const menu3 = document.querySelector('.menu3')
const menuName = document.querySelector('.menu2')
menu3.addEventListener('click', () => {
    menu3.classList.toggle('open')
    menuName.classList.toggle('open')
})
const down2 = document.querySelector('.down')
const menu2 = document.querySelector('.menu1')
down2.addEventListener('click', () => {
    down2.classList.toggle('open')
    menu2.classList.toggle('open')
})

const down = document.querySelector('.feat')
const feat = document.querySelector('.feat-me')
down.addEventListener('click', () => {
    down.classList.toggle('open')
    feat.classList.toggle('open')
})

const com = document.querySelector('.com')
const comup = document.querySelector('.com-up')
com.addEventListener('click', () => {
    com.classList.toggle('open')
    comup.classList.toggle('open')
})