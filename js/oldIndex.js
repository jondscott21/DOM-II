// Your code goes here


// #### Window ####


//Scroll
const home = document.querySelector('.home');
window.addEventListener('scroll', event => {
    home.style.background = 'antiquewhite';
})

// Resize
window.addEventListener('resize', event =>{
    if(window.innerWidth <= 550) {
        home.style.background = 'lightblue';
    }
    else if (window.innerWidth > 550) {
        home.style.background = '';
    }
})

// Keydown
window.addEventListener('keydown', event => {
    event.target.style.color = 'pink';
})

window.addEventListener('keyup', event => {
    event.target.style.color = 'black';
})

// Load
window.addEventListener('load', (event) => {
    // alert('Page Loaded');
});



// #### Double click scroll to top on fun bus ####
const funBus = document.querySelector('.logo-heading');
funBus.addEventListener('dblclick', event => {
    window.scroll(0, 0);
})

//#### Nav Anchor Color change ####
const nav = document.querySelector('nav');
console.log(nav);

nav.addEventListener('mouseover', event => {
    event.target.style.color = 'blue';
})

nav.addEventListener('mouseout', event => {
    event.target.style.color = 'black';
})

// prevent click on anchors
nav.addEventListener('click', event => {
    event.preventDefault();
})


// Wheel
const welcome = document.querySelector('.intro p');
welcome.addEventListener('wheel', event => {
    event.preventDefault();
    let scale = 1;
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    event.target.style.transform = `scale(${scale})`;
})
welcome.addEventListener('click', event => {
    let scale = 1;
    event.target.style.transform = `scale(${scale})`;
})
console.log(welcome.textContent);
welcome.addEventListener('select', event => {
    event.target.style.background ='red';
})

// Focus
const firstAnchor = document.querySelector('.nav a')
console.log(firstAnchor);
firstAnchor.addEventListener('focus', event => {
    event.target.style.fontSize = '5rem';
})
firstAnchor.addEventListener('blur', event => {
    event.target.style.fontSize = '';
})

// Drag/Drop
const busImg = document.querySelector('.intro img');
busImg.addEventListener('dragstart', event => {
    welcome.style.color = 'green';
    console.log('dragged');  
    
});
busImg.addEventListener('dragend', event => {
    console.log('dropped');
    welcome.style.color = 'red';   
});

// Select
const inputBar = document.createElement('input')
inputBar.value = `Select me!`;
home.appendChild(inputBar)
console.log(inputBar);
inputBar.addEventListener('select', event => {
    alert('selected this');
})

// Propagation chain

const contentDestination = document.querySelector('.content-pick');
const destination = document.querySelector('.destination');
const btn = document.querySelector('.btn');
console.log(contentDestination);

contentDestination.addEventListener('click', event => {
    event.stopPropagation();
    alert(`clicked top div`);
})
destination.addEventListener('click', event => {
    event.stopPropagation();
    alert(`clicked middle div`);
})
btn.addEventListener('click', event => {
    event.stopPropagation();
    alert(`clicked bottom div`);
});