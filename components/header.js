/*
Christoper Bernhard
University Of Denver
ICT 4510 - Final Project
header component
*/

'use strict'

const template = document.createElement('template');
template.innerHTML = `

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul {
    list-style-type: none;
  }

  a {
    color: #F3F3F3;
    text-decoration: none;
    display: inline-block;
  }

  .container {
    width: 95%;
    max-width: 1300px;
    margin: 0 auto;
  }
  
  header {
    background-color: var(--bg-color);
    padding: 2rem 0 .5rem 0;
  }

  .logo {
    font-weight: 300;
    letter-spacing: 2px;
    font-size: 3rem;
  }
  
  .logo-accent {
    font-weight: 700;
    color: var(--accent-color);
  }

  .nav-wrapper {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .nav-main {
    display: flex;
    justify-content: flex-end;
  }

  .nav-main a {
    font-weight: 400;
    transition: color .2s ease-in;
  }

  .nav-main a:hover {
    color: var(--accent-color);
  }

  .nav-list {
    display: flex;
    justify-content: space-between;
  }

  .nav-item {
    font-size: 1.2rem;
    padding-left: 2rem;
  }

  /* BURGER MENU ON MEDIUM SCREENS */

  .burger-menu {
    width: 40px;
    /* height: 40px; */
    display: none;
    z-index: 3;
    cursor: pointer;
  }

  .burger-bar {
    width: 25px;
    height: 3px;
    background-color: #F3F3F3;
    margin: 5px;
  }

/* MEDIA QUERY FOR NAV ON MEDIUM AND SMALL SCREENS */

  @media screen and (max-width: 770px) {
    header {
      padding: 2rem 0 .5rem 0;
    }
    .burger-menu {
      display: block;
      z-index: 1101;
      cursor: pointer;
    }
    .nav-main {
      background-color: #2e2e2e;
      width: 100%;
      max-width: 100%;
      height: 100vh;
      justify-content: center;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1100;
      transform: translateX(100%);
      transition: transform .5s ease-out;
    }
    .nav-list {
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
    }

    .nav-main a {
      font-size: 1.5rem;
    }

    .slide {
      transform: translateX(0);
    }
    .burger-move .top-line {
      transform: rotate(-45deg) translate(-5px, 6px);
    }
    .burger-move .middle-line {
      opacity: 0;
    }
    .burger-move .bottom-line {
      transform: rotate(45deg) translate(-5px, -6px);
    }
  }
</style>

<header>
<div class="nav-wrapper container">
  <p class="logo">Pub <span class="logo-accent">82</span></p>
  <nav class="nav-main">
    <ul class="nav-list" id="nav-list">
      <li class="nav-item"><a href="/">Home</a></li>
      <li class="nav-item"><a href="menu.html">Menu</a></li>
      <li class="nav-item"><a href="contact.html">Contact</a></li>
      <li class="nav-item"><a href="login.html">Login</a></li>
    </ul>
  </nav>
  <div class="burger-menu">
    <div class="burger-bar top-line"></div>
    <div class="burger-bar middle-line"></div>
    <div class="burger-bar bottom-line"></div>
  </div>
</div>
</header>
`;

class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    const burgerMenu = this.shadowRoot.querySelector('.burger-menu');
    const navList = this.shadowRoot.querySelector('.nav-main')

    burgerMenu.addEventListener('click', () => {
      //toggle nav on screen
      navList.classList.toggle('slide');
      //animate burger lines
      burgerMenu.classList.toggle('burger-move');
    })
  }
}

window.customElements.define('custom-header', Header);