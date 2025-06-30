// /////////////////////
window.addEventListener("scroll", function () {
    let nav = document.querySelector(".navbar");
    nav.classList.toggle("fix", window.scrollY > 150);
}) 
//////////////////////////
window.addEventListener("scroll" , function () {
    let scrollUp = document.querySelector(".scroll_up");
    scrollUp.classList.toggle("scroll_transition", window.scrollY > 150);
    scrollUp.classList.toggle("show_scroll", window.scrollY > 200)
})
    let scrollUp = document.querySelector(".scroll_up");

scrollUp.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior:"smooth"
    })
})


var owl = $('.slider_1');
owl.owlCarousel({
    items:1, 
  // items change number for slider display on desktop
  
    loop:true,
    margin:20,
    navigation: true,
    autoplay: true,
    smartSpeed: 800,
    rtl:true,
    navElement: "dots",
    navText:[`<i class="fa-solid fa-chevron-right"></i>` , `<i class="fa-solid fa-chevron-left"></i>`],
    paginationSpeed : 800,
    dots: true,  
    dotsEach:true,
    responsive:{
        0:{
            items: 1,
        },
        500:{
            items: 2,
        },
        1000:{
            items: 3,
        },
      
    }
});
var owl = $('.slider_2');
owl.owlCarousel({
    items:1, 
  // items change number for slider display on desktop
  
    loop:true,
    margin:20,
    navigation: true,
    autoplay: true,
    smartSpeed: 800,
    rtl:true,
    navElement: "dots",
    navText:[`<i class="fa-solid fa-chevron-right"></i>` , `<i class="fa-solid fa-chevron-left"></i>`],
    paginationSpeed : 800,
    dots: true,  
    dotsEach:true,
    responsive:{
        0:{
            items: 1,
        },
        500:{
            items: 2,
        },
        1000:{
            items: 3,
        },
      
    }
});
