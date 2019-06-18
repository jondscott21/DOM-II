// Your code goes here
const navAnchors = document.querySelector('nav');
console.log(navAnchors);

// #### Double click scroll to top on fun bus ####
const funBus = document.querySelector('.logo-heading');
funBus.addEventListener('dblclick', event => {
    window.scroll(0, 0);
})

//#### Nav Anchor Color change ####
navAnchors.addEventListener('mouseover', event => {
    event.target.style.color = 'blue';
})

navAnchors.addEventListener('mouseout', event => {
    event.target.style.color = 'black';
})


