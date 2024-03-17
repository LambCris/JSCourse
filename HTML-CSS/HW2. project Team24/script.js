const burger = document.querySelector(".menu_burger");
const menu = document.querySelector(".menu_list");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  menu.classList.toggle("open");
});


// ------- slider--------------------
const sliderImages = document.querySelector('.slider_images');
const images = document.querySelectorAll('.slider_images .slider_img');
const prevBtn = document.querySelector('.left');
const nextBtn = document.querySelector('.right');
const dots = document.querySelectorAll('.dots_container .wrapper span')

let index = 0;
let lengthItems = images.length -1;


nextBtn.addEventListener('click', function(){
  if (index+1 > lengthItems){
    return;
  }else{
    index ++;
  }
  showSlide();
  let activeDot = document.querySelector('.slider_dots .dots_container .wrapper span.checked');
  activeDot.classList.remove('checked')
  dots[index].classList.add('checked')
})

function showSlide(){
  let checkLeft = images[index].offsetLeft;
  sliderImages.style.left = -checkLeft +'px';
}

prevBtn.addEventListener('click', function(){
  if (index-1 <0){
    return;
  }else{
    index --;
  }
  showSlide();
  let activeDot = document.querySelector('.slider_dots .dots_container .wrapper span.checked');
  activeDot.classList.remove('checked')
  dots[index].classList.add('checked')
})

dots.forEach( (dot,ind)=>{
  dot.addEventListener('click', function(){
    index = ind;
    showSlide();
    let activeDot = document.querySelector('.slider_dots .dots_container .wrapper span.checked');
    activeDot.classList.remove('checked')
    dots[index].classList.add('checked')
  })
})
