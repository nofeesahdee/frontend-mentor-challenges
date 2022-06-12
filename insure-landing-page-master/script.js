const open = document.querySelector('.icon-open')
const close = document.querySelector('.icon-close')
const nav = document.querySelector('nav')

const faders = document.querySelectorAll('.fade-in')
const sliders = document.querySelectorAll('.slide-in')

open.addEventListener('click', () =>{
    nav.style.display= "block"
    open.style.display = "none"
    close.style.display = "block"
})

close.addEventListener('click', () =>{
    nav.style.display= "none"
    open.style.display = "block"
    close.style.display = "none"
})

const appearOptions = {
    threshold: 0,
    rootMargin:"100px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(
    function(entries, appearOnScroll){
        entries.forEach(entry =>{
            if(!entry.isIntersecting){
                return
            }else{
                entry.target.classList.add("appear");
                appearOnScroll.unobserve(entry.target)
            }
        })
    }, appearOptions
)

faders.forEach(fader =>{
    appearOnScroll.observe(fader);
})

sliders.forEach(slider =>{
    appearOnScroll.observe(slider);
})

