/*
Christoper Bernhard
University Of Denver
ICT 4510 - Final Project
main script page to run all the scripts when the page loads
*/

'use strict'

import { displayHeader } from './nav.js'
import { navSlide } from './navSlide.js'
import { handleLogin } from './handleLogin.js'
import { handleDashboard } from './dashboard.js'
import { menuPageDisplay } from './menuPageDisplay.js'

displayHeader();
navSlide();

function checkLogin() {
  if (sessionStorage.getItem('userData')) {
    window.location.href = '/dashboard.html'
  }
  return;
}


//checks if the user is on the login page
//if so run the login script
if (window.location.pathname === '/login.html') {
  const form = document.querySelector('#login');
  form.style.visibility = 'hidden';
  checkLogin();
  form.style.visibility = 'visible';
  handleLogin();
}

if (window.location.pathname === '/dashboard.html') {
  handleDashboard();
}

if (window.location.pathname === '/menu.html') {
  menuPageDisplay();
}