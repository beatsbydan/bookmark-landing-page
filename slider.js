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

//slide navs
//getting the block of content of the navs
const nav = document.querySelector('.the__navs')
//making an array of the content of the navs
const slideNavBlock = Array.from(nav.children)
//filtering the array to select the three navs
const slideNav = slideNavBlock.filter((indexes) => {
    return indexes === slideNavBlock[1] || indexes === slideNavBlock[3] || indexes === slideNavBlock[5];
})

//clicking to view slides
nav.addEventListener('click', e => {
    //targetting the closest paragraph
    const targetIndex = e.target.closest('p');
    const currentSlide = track.querySelector('.current__slide')
    const currentNav = nav.querySelector('.current__nav')
    const targetNav = slideNav.findIndex(index => index === targetIndex)
    const targetSlide = slides[targetNav]
    
    moveToExactSlide(track, currentSlide, targetSlide);
})
//slideNav.addEventListener("click", () => {})