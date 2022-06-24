const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navlinks = document.querySelectorAll(".nav_links li");

const sub = document.querySelector("sub")
const navAnimation = () =>{
    navlinks.forEach((link, index) => {
        if (link.style.animation){
            link.style.animation = "";
        }
        else{
            link.style.animation = 'navLinkFade 0.5s ease forwards ${index/7+0.5}s';
            
            //여기가 안되는 듯함
        }
    });
};
const handleNav = () =>{
    nav.classList.toggle("nav-active");

    navAnimation();

    burger.classList.toggle("toggle");
};
const navSlide = () => {
    burger.addEventListener('click', handleNav);
};
const subNavinit = () =>{
    $('#sublink').slideUp();
}
const subnavUp = () =>{
    $('#navigation').mouseleave(function(){
        $('#sublink').slideUp();
    })
    
}
const subnavDown = () =>{
    $('#navigation').mouseenter(function(){
        $('#sublink').slideDown();
        $('#sublink').mouseleave(function(){
            $('#sublink').slideUp();
        })
    })
    
    
}

const setNavTransition = (width) =>{
    if (width > 768){
        nav.style.transition = "";
    }else{
        nav.style.transition = "transform 0.5s ease-in";
    }
};

const handleResize = () =>{
    var width = event.target.innerWidth;
    setNavTransition(width);
    
};
const handleSubNav = () =>{
    const width = document.documentElement.scrollWidth;
    
    
}
const init = () =>{
    window.addEventListener("resize", handleResize);
    navSlide();
};

const setSubNav = () =>{

}

subnavDown();

subNavinit();
init();
