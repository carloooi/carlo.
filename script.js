const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    //open navbar
   document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () =>  menuOpenButton.
click());

navLinks.forEach(link => {
  link.addEventListener("click", () =>  menuOpenButton.
  click());
});
//initialize swiper
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    //rensponsive
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
       
    }
  });

   //typing effect

  let typingEffect = new Typed(".autoText",{
    strings : ["Web developer","Programmer","Designer"],
    loop : true, 
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
  })


  


  