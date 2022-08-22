//getting the track
const track = document.querySelector(".carousel__track");

//Array of the slides
const slides = Array.from(track.children);

//getting Slide-width from one of the slides
const slideWidth = slides[0].getBoundingClientRect().width

//function to set slide position
function setSlidePosition(slide, index){
    slide.style.left = slideWidth * index + 'px';
}
//setting the position
slides.forEach(setSlidePosition);

//function to move slides
const moveToExactSlide = (tracks, currentSlides, targetSlides) =>{
    currentSlides.classList.remove("current__slide");
    targetSlides.classList.add("current__slide");
    tracks.style.transform = 'translateX(-' +targetSlides.style.left+ ')';
}

//function to move red color
const moveToExactNav = (afterNavs, targetAfterNavs) => {
    afterNavs.classList.remove("current__nav")
    targetAfterNavs.classList.add("current__nav")
}

//slide navs
//getting the block of content of the navs
let nav = document.querySelector('.the__navs')
//making an array of the content of the navs
let slideNavBlock = Array.from(nav.children)
//filtering the array to select the three navs
let slideNav = slideNavBlock.filter((indexes) => {
    return indexes === slideNavBlock[1] || indexes === slideNavBlock[3] || indexes === slideNavBlock[5];
})
//filtering the array to select the three reds
let afterNav = slideNavBlock.filter((reds) => {
    return reds === slideNavBlock[2] || reds === slideNavBlock[4] || reds === slideNavBlock[6];
})

//clicking to view slides
nav.addEventListener('click', e => {
    //targetting the closest paragraph
    let targetIndex = e.target.closest('p');
    //obtaining the currentNav
    let currentAfterNav = nav.querySelector('.current__nav');
    //obtaining the targetNav
    let targetNav = slideNav.findIndex(index => index === targetIndex);
    //obtaining the actualnav
    let actualNav = afterNav[targetNav];
    
    moveToExactNav(currentAfterNav, actualNav);
})

slideNav[0].addEventListener("click", e => {
    let currentSlide = track.querySelector('.current__slide')
    let actualSlide =  slides[0];
    moveToExactSlide(track, currentSlide , actualSlide);
})

slideNav[1].addEventListener("click", e => {
    let currentSlide = track.querySelector('.current__slide')
    let actualSlide =  slides[1];
    moveToExactSlide(track, currentSlide , actualSlide);
})

slideNav[2].addEventListener("click", e => {
    let currentSlide = track.querySelector('.current__slide')
    let actualSlide =  slides[2];
    moveToExactSlide(track, currentSlide , actualSlide);
} )