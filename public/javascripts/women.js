let slide1 = document.querySelector(".slide1")
let slide2 = document.querySelector(".slide2")
let radio1 = document.querySelector("#radio1")
let radio2 = document.querySelector("#radio2")

// console.log(slide1.clientWidth);
let slidesWidth = slide1.clientWidth;
let checkScrollCondition = 0;
setInterval(() => {
  if(checkScrollCondition === 0){
    slide1.style.width = 0;
    slide2.style.width = slidesWidth;
    checkScrollCondition = 1;
    radio1.checked = false
    radio2.checked = true
  } else {
    slide2.style.width = 0;
    slide1.style.width = slidesWidth;
    checkScrollCondition = 0;
    radio1.checked  = true
    radio2.checked = false
  }
}, 3000);

radio1.addEventListener('click',()=>{
  slide2.style.width = 0;
    slide1.style.width = slidesWidth;
    checkScrollCondition = 0;
    radio1.checked  = true
    radio2.checked = false
})
radio2.addEventListener('click',()=>{
  slide1.style.width = 0;
    slide2.style.width = slidesWidth;
    checkScrollCondition = 1;
    radio1.checked = false
    radio2.checked = true
})