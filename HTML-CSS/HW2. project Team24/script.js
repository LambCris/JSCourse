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

// ------- -----------------------CONTROLS---------------- 

//-------btn--------
const winterBtn = document.querySelector('.controls_btn #winter');
const springBtn = document.querySelector('.controls_btn #spring');
const summerBtn= document.querySelector('.controls_btn #summer');
const autumnBtn = document.querySelector('.controls_btn #autumn');

// ------books------

const springBooks = document.querySelector('.spring_season');
const summerBooks = document.querySelector('.summer_season');
const autumnBooks = document.querySelector('.autumn_season');
const winterBooks = document.querySelector('.winter_season');
const inputs = document.querySelectorAll('.controls input[type="radio"]');



function springBook(){
  springBtn.addEventListener('click', function(){
    winterBooks.classList.add('card');
    summerBooks.classList.add('card');
    autumnBooks.classList.add('card');
    springBooks.classList.remove('card');
})
}
springBook()

function summerBook(){
  summerBtn.addEventListener('click', function(){
    winterBooks.classList.add('card');
    autumnBooks.classList.add('card');
    springBooks.classList.add('card');
    summerBooks.classList.remove('card');
})
}
summerBook()


function autumnBook(){
  autumnBtn.addEventListener('click', function(){
    springBooks.classList.add('card');
    summerBooks.classList.add('card');
    winterBooks.classList.add('card');
    autumnBooks.classList.remove('card');
})
}
autumnBook()

function winterBook(){
  winterBtn.addEventListener('click', function(){
    springBooks.classList.add('card');
    summerBooks.classList.add('card');
    autumnBooks.classList.add('card');
    winterBooks.classList.remove('card');
})
}
winterBook()




