import "./style.css";

// Prevent showing animation on window resize
// let resizeTimer;
// window.addEventListener("resize", () => {
//     document.body.classList.add("resize-animation-stopper");
//     clearTimeout(resizeTimer);
//     resizeTimer = setTimeout(() => {
//         document.body.classList.remove("resize-animation-stopper");
//     }, 400);
// });

// // Menu toogle on mobile

// document.addEventListener("DOMContentLoaded", function () {
//     const navToggle = document.querySelector(".nav-toggle");
//     const navMenu = document.querySelector(".nav-menu");

//     navToggle.addEventListener("click", function () {
//         navMenu.classList.toggle("active");
//     });
// });

// // Dropdown toogle on mobile
// const dropdown = document.querySelector(".dropdown a");

// dropdown.addEventListener("click", function (e) {
//     this.nextElementSibling.classList.toggle("show");
//     this.parentNode.classList.toggle("active");
//     e.stopPropagation();
// });

//scroll navbar

// document.addEventListener("scroll", function () {
//     const headerNav = document.querySelector(".header-nav");
//     if (window.scrollY > 0) {
//         headerNav.classList.add("scrolled");
//     } else {
//         headerNav.classList.remove("scrolled");
//     }
// });
