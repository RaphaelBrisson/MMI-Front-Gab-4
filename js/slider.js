var carouselSlide = document.querySelector('.main-carousel');
var carouselImages = document.querySelectorAll('.carousel-cell div');
var prevBtn = document.querySelector('#prevBtn');
var nextBtn = document.querySelector('#nextBtn');
let counter = 1;
var size = carouselImages[0].clientWidth + 40;


carouselSlide.style.transform = 'translateX(' + (-size) + 'px)';


function autoplay(){
  carouselSlide.style.transition = "transform 0.8s ease-in-out";
  carouselSlide.style.transform = 'translateX(' + (-size * (counter + 1)) + 'px)';
  counter++;
};

jQuery(document).ready(function(){
    // setInterval(autoplay, 3000);
});




nextBtn.addEventListener('click', function next(){
  if(counter >= carouselImages.length -1) return;
  carouselSlide.style.transition = "transform 0.8s ease-in-out";
  counter++;
  console.log(counter);
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  // if (counter >= 3) {
  //   $('.main-carousel').css('transform', 'translateX(-10320px);');
  // }
});

prevBtn.addEventListener('click', function prev(){
  if(counter <= 0) return;
  carouselSlide.style.transition = "transform 0.8s ease-in-out";
  counter--;
  console.log(counter);
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', function loop(){
  console.log(carouselImages[counter].id);
  if(carouselImages[counter].id === 'lastClone'){
    carouselSlide.style.transition = "none";
    counter = carouselImages.length -2;
    console.log(counter);
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }

  if(carouselImages[counter].id === 'firstClone'){
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }

  if((-size * counter) == (-size * 5)){
    counter = carouselImages.length -counter;
    carouselSlide.style.transform = 'translateX(-660px)';
    counter=1;
  }

});
