"use strict";

const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerClose = document.querySelector(".hamburger-close");
const mobileMenu = document.querySelector(".header__nav");

hamburgerMenu.addEventListener("click", openMenu);
hamburgerClose.addEventListener("click", closeMenu);

function openMenu() {
  hamburgerMenu.style.display = "none";
  hamburgerClose.style.display = "block";
  mobileMenu.style.display = "block";
}
function closeMenu() {
  hamburgerClose.style.display = "none";
  hamburgerMenu.style.display = "block";
  mobileMenu.style.display = "none";
}
