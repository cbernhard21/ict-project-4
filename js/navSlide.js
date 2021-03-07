/*
Christoper Bernhard
University Of Denver
ICT 4510 - Final Project
Script for mobile nav to slide on and move the menu bars
*/

'use strict'

function navSlide() {
  const burgerMenu = document.querySelector('.burger-menu');
  const navList = document.querySelector('.nav-main')

  burgerMenu.addEventListener('click', () => {
    //toggle nav on screen
    navList.classList.toggle('slide');
    //animate burger lines
    burgerMenu.classList.toggle('burger-move');
  })
}