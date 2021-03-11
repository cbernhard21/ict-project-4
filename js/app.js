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


const path = window.location.pathname;

//check the page to know which script to run
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

checkPage(path);
getFooterHtml();

function checkLogin() {
  if (sessionStorage.getItem('userData')) {
    window.location.href = '/dashboard.html'
  }
  return;
}