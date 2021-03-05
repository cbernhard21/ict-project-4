export function showLoader() {
  const loader = document.querySelector('.loader');
  loader.classList.remove('hidden');
}

export function hideLoader() {
  const loader = document.querySelector('.loader');
  loader.classList.add('hidden');
}

export function hideLogin() {
  const loginForm = document.querySelector('.login-form')
  loginForm.classList.add('hidden');
}

export function resetForm(form) {
  form.reset();
}