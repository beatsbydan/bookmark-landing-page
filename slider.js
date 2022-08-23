//getting the track
const track = document.querySelector(".carousel__track");

//Array of the slides
const slides = Array.from(track.children);

//getting Slide-width from one of the slides
const slideWidth = slides[0].getBoundingClientRect().width

//function to set slide position
function setSlidePosition(slide, index){
    slide.style.left = slideWidth * 6 * index + 'px';
}
//setting the position
slides.forEach(setSlidePosition);

//function to move slides
const moveToExactSlide = (tracks, currentSlides, targetSlides) =>{
    //remove the class of current__slide from the current slide
    currentSlides.classList.remove("current__slide");
    //add the class of current__slide to the desired target slide
    targetSlides.classList.add("current__slide");
    //Translates the desired target slide along the x axis by moi=ving it relative to its left
    tracks.style.transform = 'translateX(-' +targetSlides.style.left+ ')';
}

//function to move red nav
const moveToExactNav = (afterNavs, targetAfterNavs) => {
    //remove the class of current__nav from the current nav
    afterNavs.classList.remove("current__nav")
    //add the class of current__nav from the current nav
    targetAfterNavs.classList.add("current__nav")
}

const moveToDesktopNav = (desktopnav, targetDesktopNav) => {
    desktopnav.classList.remove("this__nav")
    targetDesktopNav.classList.add("this__nav")
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

// event for clicking to view slides
nav.addEventListener('click', e => {
    //targetting the closest paragraph
    let targetIndex = e.target.closest('p');
    //obtaining the currentNav
    let currentAfterNav = nav.querySelector('.current__nav');
    //obtaining the currentDesktopNav
    let currentDesktopNav = nav.querySelector('.this__nav');
    //obtaining the targetNav
    let targetNav = slideNav.findIndex(index => index === targetIndex);
    //obtaining the actualnav
    let actualNav = afterNav[targetNav];
    //obtaining the actual desktop nav
    let actualDesktopNav = slideNav[targetNav];
    
    //moving the mobile nav
    moveToExactNav(currentAfterNav, actualNav);
    //mobing the desktop nav
    moveToDesktopNav(currentDesktopNav, actualDesktopNav);
})

//events for clicking to view each nav
//events for clicking to view nav 1
slideNav[0].addEventListener("click", e => {
    //getting the current slide
    let currentSlide = track.querySelector('.current__slide')
    //getting actual slide relative to nav
    let actualSlide =  slides[0];
    
    //moving the slide
    moveToExactSlide(track, currentSlide , actualSlide);
})

//events for clicking to view nav 2
slideNav[1].addEventListener("click", e => {
    //getting the current slide
    let currentSlide = track.querySelector('.current__slide')
    //getting actual slide relative to nav
    let actualSlide =  slides[1];

    //moving the slide
    moveToExactSlide(track, currentSlide , actualSlide);
})

//events for clicking to view nav 3
slideNav[2].addEventListener("click", e => {
    //getting the current slide
    let currentSlide = track.querySelector('.current__slide')
    //getting actual slide relative to nav
    let actualSlide =  slides[2];

    //moving the slide
    moveToExactSlide(track, currentSlide , actualSlide);
})