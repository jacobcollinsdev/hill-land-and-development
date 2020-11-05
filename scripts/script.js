const navToggle = document.querySelector('.nav-toggle-button');
const navLinks = document.querySelectorAll('.nav-link');
const scrollDown = $('.scroll-down');

navToggle.addEventListener('click', ()=>{
    document.body.classList.toggle('nav-open');
})

navLinks.forEach(link => {
    link.addEventListener('click', ()=>{
        document.body.classList.remove('nav-open');
    })
})

scrollDown.click(()=>{
    $('html, body').animate({
        scrollTop: $('#buying-selling').offset().top
    }, 500);
})

//Animations

// gsap.from(".welcome-statement",{
//     opacity:0,
//     duration:1,
//     scaleX:1.2,
//     scaleY:1.2
// })

if(window.innerWidth > 900){
    gsap.from(".nav-fade",{
        opacity:0,
        duration:0.5,
        stagger:0.2
    })
}

// Buying/Selling Timeline
let tl = gsap.timeline({
    scrollTrigger:{
        trigger:'.buying-selling',
        start: "center bottom",
        toggleActions: "play none none reverse",
        ease: "power0"
    }
})

tl.from(".buying",{
    x:-200,
    opacity:0,
    duration:1
}).from(".selling",{
    x:200,
    opacity:0,
    duration:1
}, "-=1")


let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".why-us",
        start:"center bottom",
        toggleActions: "play none none reverse",
    }
})

tl2.from(".anim1",{
    x:-200,
    opacity:0,
    duration:0.5,
    stagger:0.2
})

tl4 = gsap.timeline({
    scrollTrigger:{
        trigger:".contact",
        start:"center bottom",
        toggleActions: "play none none reverse",
        ease:"power2"
    }
})

tl4.from(".anim4",{
    x:-200,
    opacity:0,
    duration:0.5,
    stagger:0.2
}).from(".anim5",{
    x:200,
    opacity:0,
    duration:0.5,
    stagger:0.2
}, "-=0.5")

const projectTrigger = document.querySelectorAll('.project-trigger');

projectTrigger.forEach(addTimeline);

function addTimeline(project, index){
    const image = project.querySelector(".project-image");
    const text = project.querySelectorAll(".project-text");

    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: project,
            start:"center bottom",
            ease:"power2.easeOut",
            toggleActions: "play none none reverse",
        }
    })
    .from(image,{
        x:-200,
        opacity:0,
        duration:0.5
    })
    .from(text, {
        x: 200,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2
      }, "-=0.5");
}

