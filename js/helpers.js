/*
Christoper Bernhard
University Of Denver
ICT 4510 - Final Project
simple functions needed through out the project to be imported when needed
*/


export function showLoader() {
  const loader = document.querySelector('.loader');
  loader.classList.remove('hidden');
}

export function hideLoader() {
  const loader = document.querySelector('.loader');
  loader.classList.add('hidden');
}

export function hideLogin() {
  const loginForm = document.querySelector('.login-form');
  loginForm.classList.add('hidden');
}

export function showLogin() {
  const loginForm = document.querySelector('.login-form');
  loginForm.classList.remove('hidden');
}

export function hideErrorMessage() {
  const errorMessage = document.querySelector('.error-message');
  errorMessage.classList.add('hidden');
}

export function showErrorMessage() {
  const errorMessage = document.querySelector('.error-message');
  errorMessage.classList.remove('hidden');
}

export function resetForm(form) {
  form.reset();
}