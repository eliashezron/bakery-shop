const openMenu = select('.fa-bars')
const closeMenu = select('.fa-times')
const navList = select('.nav-list')

function select(el){
    return document.querySelector(el)
}

openMenu.addEventListener('click',()=>{
    openMenu.classList.toggle('open', true)
    closeMenu.classList.toggle('open',true)
    navList.classList.toggle('active', true)
})
closeMenu.addEventListener('click', ()=>{
    closeMenu.classList.toggle('open', false)
    openMenu.classList.toggle('open', false)
    navList.classList.remove('active', false)

})
navList.addEventListener

AOS.init({
    easing:'ease',
    duration:1000
})
