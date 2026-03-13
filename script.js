// Code for Home Page businesses swiper
const swiperBusinesses = new Swiper('.businesses__swiper', {
   loop: true,
   slidesPerView: 'auto',
   centeredSlides: 'auto',
   spaceBetween: 16,
   grabCursor: true,
   speed: 600,
   effect: 'coverflow',
   coverflowEffect:{
      rotate: -90,
      depth: 600,
      modifier: .5,
      slideShadows: false,
   },

   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },

   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },
})

//Code for Home Pade events image accordian

const options = document.querySelectorAll(".option");
let currentIndex = 0;

// Manual click activation
options.forEach((option, index) => {
    option.addEventListener("mouseover", () => {
        setActive(index);
    });
});

 // Function to activate selected slide
function setActive(index) {
    options.forEach(o => o.classList.remove("active"));
     options[index].classList.add("active");
    currentIndex = index;
}

// Auto slide every 3 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % options.length;
    setActive(currentIndex);
}, 15000);

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    Swal.fire({
        title: "Message Sent!",
        text: "Thanks for reaching out!",
        icon: "success",
        iconColor: "hsl(174.4, 62%, 47.5%)",
        confirmButtonText: "OK",
        confirmButtonColor: "hsl(174.4, 62%, 47.5%)",
        showCloseButton: true
    });

    this.reset(); // clears all form fields
});

//Apple Animation
gsap.registerPlugin(ScrollTrigger);

gsap.to(".all-text", {
    y: -600,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".content",
        start: "top top",
        end: "+=800",
        scrub: true,
        pin: true
    }
});

gsap.to(".video-bg", {
  scale: 1.2,
  ease: "none",
  scrollTrigger: {
    trigger: ".content",
    start: "top top",
    end: "+=1200",
    scrub: true
  }
});

gsap.to(".overlay", {
    backgroundColor: "rgba(0,0,0,0.2)",
    ease: "none",
    scrollTrigger: {
        trigger: ".content",
        start: "top top",
        end: "+=1200",
        scrub: true
    }
});
