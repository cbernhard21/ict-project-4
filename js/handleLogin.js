/* 
Chris Bernhard
ICT 4510
University Of Denver
username: cbernhard
password: ict4510@pp
url: https://ict4510.herokuapp.com/api/login
*/

'use strict'
//Global Variables
const loginBtn = document.querySelector('.btn-login');


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
      const userData = await response.json();
      sessionStorage.setItem('userData', JSON.stringify(userData));
      location.href = 'dashboard.html'
    }
  } catch (error) {
    // hideSpinner();
    // showErrorHtml();
    console.log(`there was an issue ${error}`);
  }
}

//function exported to app.js to handle all login form
export function handleLogin() {
  loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    handleLoginSubmission();
    console.log('log in form submitted')

  })
}