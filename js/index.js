// Mouseover nav anchors
const nav = document.querySelector('.nav');
nav.addEventListener('mouseover', event => event.target.style.color = 'blue');
nav.addEventListener('mouseout', event => event.target.style.color = 'black');

// Keydown background change on "Enter" key press
container = document.querySelector('.container')
window.addEventListener('keydown', event =>{
    if (event.keyCode === 13) {
    
        document.body.style.background = 'lightblue';   
    }
    window.addEventListener('keyup', () => document.body.style.background = '');  
})

// Wheel switches 'fun bus' color
const funBus = document.querySelector('.logo-heading');
document.addEventListener('wheel', event => {
    if (event.deltaY > 0) {
        funBus.style.color = 'violet';
    } else if (event.deltaY < 0) {
        funBus.style.color = 'red';
    }  
})

// Drag & Drop
const busImg = document.querySelector('header > img')
console.log(busImg)