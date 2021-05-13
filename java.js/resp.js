burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightnav = document.querySelector('.rightnav')
navlist =document.querySelector('.nav-list')

burger.addEventListener('click',()=>{
    navlist.classList.toggle('v-class-resp');
    rightnav.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');

navlist.addEventListener('click',()=>{
        navlist.classList.toggle('v-class-resp')
        navbar.classList.toggle('h-nav-resp');
        rightnav.classList.toggle('v-class-resp');
    })

}
)