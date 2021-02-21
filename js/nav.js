/*
Christoper Bernhard
University Of Denver
ICT 4510 - Final Project
Display header and nav on all the html pages
*/

'use strict'

export const links = [{
    text: 'Home',
    href: 'index.html'
  },
  {
    text: 'Menu',
    href: 'menu.html'
  },
  {
    text: 'Contact',
    href: 'contact.html'
  },
  {
    text: 'Login',
    href: 'dashboard.html'
  }
]

export function displayNavHtml(links) {
  const navList = document.querySelector('#nav-list');

  links.forEach(link => {
    let li = `<li class="nav-item"><a href="${link.href}">${link.text}</a></li>`
    navList.innerHTML += li;
  })
}