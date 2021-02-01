//menu fixed
window.addEventListener("scroll",function(){
    var top = document.querySelector(".top"); 
    top.classList.toggle("sticky", scrollY > 0)
})

//banner
 const slideList =[
{
    img: "assets/images/banner/rzeszow.jpg",
    text:'Profesionalne doradztwo dla biznesu'
},
{
    img:'assets/images/banner/tower.jpg',
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
/*         if(slideList[0] === slideList[activeSlide]) {
        header.style.filter = 'brightness(10%)';
        console.log("pociemniamy");
    }  */
    console.log(slideList[activeSlide].img);
    header.style.backgroundImage = `url(${slideList[activeSlide].img})`;
    h2.textContent = slideList[activeSlide].text;
}


setInterval(changeSlide, bannerTime) 