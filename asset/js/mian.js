//  show menu
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')
const navMenu = document.getElementById('nav-menu')

// When we click the toggle
if(navToggle){
    navToggle.addEventListener('click',()=>{
     navMenu.classList.add('show-menu')        
    })
}
// when we click the close button
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}

//  Remove menu on mobile

const navLinks = document.querySelectorAll('.nav__link')
function activeLink(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLinks.forEach((navLink)=>{
    navLink.addEventListener('click',activeLink)
})
