/* 
Chris Bernhard
ICT 4510
University Of Denver
username: cbernhard
password: ict4510@pp
this script handles the user login
*/

'use strict'

import { hideLoader, showLoader, hideLogin, showLogin, showErrorMessage, hideErrorMessage } from './helpers.js'

//function exported to app.js to handle all login form
export function handleLogin() {

  //Global Variables
  const loginBtn = document.querySelector('.btn-login');

  //Functions
  async function handleLoginSubmission() {
    hideLogin();
    showLoader();
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    const url = 'https://ict4510.herokuapp.com/api/login';
    const formData = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        username: username,
        password: password
      }),
    };
    try {
      const response = await fetch(url, formData);
      if (!response.ok) {
        hideLoader();
        showLogin();
        showErrorMessage();
        throw new Error(`HTTP error! status: ${response.status}`)
      } else {
        const userData = await response.json();
        sessionStorage.setItem('userData', JSON.stringify(userData));
        window.location.href = 'dashboard.html';
      }
    } catch (error) {
      console.log(`there was an issue ${error}`);
    }
  }

  //Event Listeners
  loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    hideErrorMessage();
    handleLoginSubmission();
  })
}