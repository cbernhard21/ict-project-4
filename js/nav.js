/*
Christoper Bernhard
University Of Denver
ICT 4510 - Final Project
Display header and nav on all the html pages
*/

'use strict'

export function displayHeader() {
  const header = document.querySelector('#header');
  header.innerHTML = `
  <div class="nav-wrapper container">
    <p class="logo">Bistro <span class="logo-accent">715</span></p>
    <nav class="nav-main">

      <ul class="nav-list" id="nav-list">
        <li class="nav-item"><a href="index.html">Home</a></li>
        <li class="nav-item"><a href="menu.html">Menu</a></li>
        <li class="nav-item"><a href="contact.html">Contact</a></li>
        <li class="nav-item"><a href="login.html">Login</a></li>
      </ul>
    </nav>
    <div class="burger-menu">
      <div class="burger-bar top-line"></div>
      <div class="burger-bar middle-line"></div>
      <div class="burger-bar bottom-line"></div>
    </div>
  </div>`;
}