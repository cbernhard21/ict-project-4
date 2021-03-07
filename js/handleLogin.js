/* 
Chris Bernhard
ICT 4510
University Of Denver
username: cbernhard
password: ict4510@pp
url: https://ict4510.herokuapp.com/api/login
*/

'use strict'

import { hideLoader, showLoader, hideLogin } from './utilities.js'

//function exported to app.js to handle all login form
export function handleLogin() {

  //Global Variables
  const loginBtn = document.querySelector('.btn-login');

  //Functions
  async function handleLoginSubmission() {
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
        throw new Error(`HTTP error! status: ${response.status}`)
      } else {
        showLoader();
        hideLogin();
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
    handleLoginSubmission();
  })
}