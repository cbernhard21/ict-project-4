/*
Christoper Bernhard
University Of Denver
ICT 4510 - Final Project
main script page to run all the scripts when the page loads
*/

'use strict'

import { handleLogin } from './handleLogin.js';
import { handleDashboard } from './dashboard.js';
import { menuPageDisplay } from './menuPageDisplay.js';
import { displayMap } from './map.js';
import { getFooterHtml } from './displayHtmlElements.js';
import '../components/header.js';



const pathname = window.location.pathname;
console.log(pathname);

function checkPage(pathname) {
  if (pathname === '/login.html') {
    const form = document.querySelector('#login');
    form.style.visibility = 'hidden';
    checkLogin();
    form.style.visibility = 'visible';
    handleLogin();
  }

  if (pathname === '/dashboard.html') {
    handleDashboard();
  }

  if (pathname === '/menu.html') {
    menuPageDisplay();
  }

  if (pathname === '/contact.html') {
    displayMap();
  }
}

checkPage(pathname);
getFooterHtml();

function checkLogin() {
  if (sessionStorage.getItem('userData')) {
    window.location.href = '/dashboard.html'
  }
  return;
}

//start page check - check which page the user is on and runs the appropriate script
// if (window.location.pathname === '/login.html') {
//   const form = document.querySelector('#login');
//   form.style.visibility = 'hidden';
//   checkLogin();
//   form.style.visibility = 'visible';
//   handleLogin();
// }

// if (window.location.pathname === '/dashboard.html') {
//   handleDashboard();
// }

// if (window.location.pathname === '/menu.html') {
//   menuPageDisplay();
// }

// if (window.location.pathname === '/contact.html') {
//   displayMap();
// }
//end page check