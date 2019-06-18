// Your code goes here


// #### Window ####

const home = document.querySelector('.home');
window.addEventListener('scroll', event => {
    home.style.background = 'antiquewhite';
})
window.addEventListener('resize', event =>{
    if(window.innerWidth <= 550) {
        home.style.background = 'lightblue';
    }
    else if (window.innerWidth > 550) {
        home.style.background = '';
    }
})
window.addEventListener('keydown', event => {
    event.target.style.color = 'pink';
})

window.addEventListener('keyup', event => {
    event.target.style.color = 'black';
})



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

const welcome = document.querySelector('.intro p');

welcome.addEventListener('wheel', event => {
    event.preventDefault();
    let scale = 1;
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    event.target.style.transform = `scale(${scale})`;
})
// console.log(welcome.textContent);
// welcome.addEventListener('select', event => {
//     event.target.style.background ='red';
//     console.log("we made it");
//     console.log(event.target.textContent.substring(event.target.selectionStart, event.target.selectionEnd))
//     event.target.textContent.substring(event.target.selectionStart, event.target.selectionEnd).style.color = 'red'
// })


function doSwap(a, b) {
    swapElements(document.getElementById(a), document.getElementById(b));
}

function swapElements(obj1, obj2) {
    // save the location of obj2
    let parent2 = obj2.parentNode;
    let next2 = obj2.nextSibling;
    // special case for obj1 is the next sibling of obj2
    if (next2 === obj1) {
        // just put obj1 before obj2
        parent2.insertBefore(obj1, obj2);
    } else {
        // insert obj2 right before obj1
        obj1.parentNode.insertBefore(obj2, obj1);

        // now insert obj1 where obj2 was
        if (next2) {
            // if there was an element after obj2, then insert obj1 right before that
            parent2.insertBefore(obj1, next2);
        } else {
            // otherwise, just append as last child
            parent2.appendChild(obj1);
        }
    }  
}
const destination = document.querySelectorAll('.destination');
destination.forEach(el => {
    el.addEventListener('drag', event => {
        let dragged = event.target;

        swapElements(el,)
    })
})

const box = document.getElementsByClassName('box')[0]
const containers = document.getElementsByClassName('holder')
for(const container of containers) {
  container.addEventListener("dragover", dragover)
  container.addEventListener("dragenter", dragenter)
  container.addEventListener("drop", drop)
}