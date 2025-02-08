document.addEventListener("DOMContentLoaded", () => {
const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
      const elementTop = el.getBoundingClientRect().top;
      return (
         elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
      );
};

const displayScrollElement = (element) => {
      element.classList.add("scrolled2");
};

const hideScrollElement = (element) => {
      element.classList.remove("scrolled2");
};

const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
         if (elementInView(el, 1.25)) {
            displayScrollElement(el);
         } else {
            hideScrollElement(el);
         }
      });
};

// Throttle the scroll event for better performance
let throttleTimeout;
const throttleScroll = () => {
      if (!throttleTimeout) {
         throttleTimeout = setTimeout(() => {
            handleScrollAnimation();
            throttleTimeout = null;
         }, 100);
      }
};

// Initial check in case elements are already in view on load
handleScrollAnimation();

// Add event listener for scrolling
window.addEventListener("scroll", throttleScroll);
});