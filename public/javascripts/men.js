// const slides = document.querySelectorAll(".slide")


// const radioButtons = document.querySelectorAll(".radio-btn");


//     for (let i = 0; i < radioButtons.length; i++) {
//       radioButtons[i].addEventListener("click", function () {
//         for (let j = 0; j < slides.length; j++) {
//           slides[j].style.display = "none";
//         }
//         slides[i].style.display = "block";
//       });
//     }

// var counter = 0 ;

// let slideImage = setInterval(()=>{
//     if(counter === 5){
//         counter = 0 ;
//     }
//     else {
//         counter++;
//     }

//     slides.forEach((slider , i )=>{
//         if(counter === i){
//             slider.style.width = "100vw"
//         }
//         else
//         slider.style.width = "0vw"
//     })
// },3000)


const radioButtons = document.querySelectorAll(".radio-btn");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
    
    function showSlide(slideIndex) {
      slides.forEach((slide) => {
        slide.style.display = "none";
      });
      slides[slideIndex].style.display = "block";
    }
    
    function updateActiveRadioLabel() {
      const labels = document.querySelectorAll(".slider-label");
      labels.forEach((label, index) => {
        label.classList.remove("active");
        if (index === currentSlide) {
          label.classList.add("active");
        }
      });
    }
    
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
      updateActiveRadioLabel();
    }
    
    // Initialize the first slide and radio button
    showSlide(currentSlide);
    updateActiveRadioLabel();
    
    // Automatically advance to the next slide every 5 seconds
    setInterval(nextSlide, 5000);
    
    // Add click event listeners to radio buttons
    radioButtons.forEach((radio, index) => {
      radio.addEventListener("click", () => {
        currentSlide = index;
        showSlide(currentSlide);
        updateActiveRadioLabel();
      });
    });
