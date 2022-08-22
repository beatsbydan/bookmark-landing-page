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
function moveToExactSlide(tracks, currentSlides, targetSlides){
    currentSlides.classlist.remove("current__slide");
    targetSlides.classlist.add("current__slide");
    tracks.style.transform = 'translateX(-' +targetSlides.style.left+ ')';
}

//function to move red color
function moveToExactNav(afterNavs, targetAfterNavs){
    afterNavs.classlist.remove("current__nav")
    targetAfterNavs.classlist.add("current__nav")
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
    //getting the closest div
    let targetIndexx = e.target.closest('div');
    //obtaining the current slide
    let currentSlide = track.querySelector('.current__slide');
    //obtaining the currentNav
    let currentAfterNav = nav.querySelector('.current__nav');
    //obtaining the targetNav
    let targetNav = slideNav.findIndex(index => index === targetIndex);
    //obtaining the tragetslide
    let targetSlidess = slides.findIndex(indexx => indexx === targetIndexx );
    //obtaining the actualslide
    let targetSlide = slides[targetSlidess];
    //obtaining the actualnav
    let actualNav = afterNav[targetNav];
    
    moveToExactSlide(track, currentSlide, targetSlide);
    moveToExactNav(currentAfterNav, actualNav);
})
