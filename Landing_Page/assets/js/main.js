
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', () =>{
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle','nav-menu')

let galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 0,
    slidesPerView: 0,
})

let galleryTop = new Swiper('.gallery-top', {
    effect: 'fade',
    loop: true,

    thumbs: {
      swiper: galleryThumbs
    }
})

const controlImg = document.querySelectorAll('.controls__img')

function scrollAnimation(){
    gsap.from('.destination__subtitle', {opacity: 0, duration: .2, delay: .2, y: -20})
    gsap.from('.destination__title', {opacity: 0, duration: .3, delay: .3, y: -20})
    gsap.from('.destination__description', {opacity: 0, duration: .4, delay: .4, y: -20})
    gsap.from('.destination__button', {opacity: 0, duration: .5, delay: .5, y: -20})
}

controlImg.forEach(c => c.addEventListener('click', scrollAnimation))
