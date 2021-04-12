//menu fixed
window.addEventListener("scroll",function(){
    var top = document.querySelector(".top"); 
    top.classList.toggle("sticky", scrollY > 0)
})

//banner
 const slideList =[
{
    img:'assets/images/banner/tower.jpg',
    text:'Profesionalne doradztwo dla biznesu'
},
{
    img: "assets/images/banner/rzeszow.jpg",
    text:'Skontaktuj się z nami'
}]

const header = document.querySelector('.header'); 
const h2 = document.querySelector('h2');
const bannerTime = 7000;
let activeSlide = 0;


function changeSlide() {
    activeSlide++;
    if (activeSlide === slideList.length) {
        activeSlide = 0;
    }

    header.style.backgroundImage = `url(${slideList[activeSlide].img})`;
    h2.textContent = slideList[activeSlide].text;
}


 setInterval(changeSlide, bannerTime) 

/*const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('.nav-area');

hamburger.addEventListener('click',()=>{
    navUL.classList.toggle("show");
}) */

 $(document).ready(function(){
    $(".hamburger").on("click",(function(){
        $(".nav-area,.wrapper").toggleClass("show");
    }))
    $(".hamburger").on("click",(function(){
        $(".fas").toggleClass("up");
    }))
 })  