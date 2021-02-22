/*
Christoper Bernhard
University Of Denver
ICT 4510 - Final Project
main script page to run all the scripts when the page loads
*/

'use strict'

import { displayNavHtml, mainNavLinks } from './nav.js'
import { navSlide } from './navSlide.js'
import { handleLogin } from './handleLogin.js'
import { handleDashboard } from './dashboard.js'

displayNavHtml(mainNavLinks);
navSlide();

//checks if the user is on the login page
//if so run the login script
if (window.location.pathname === '/login.html') {
  handleLogin();
}


if (window.location.pathname === '/dashboard.html') {
  handleDashboard();
}