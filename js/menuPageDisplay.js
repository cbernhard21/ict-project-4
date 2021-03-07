'use strict'

import { hideLoader } from "./helpers.js";

export function menuPageDisplay() {
  const menuCardContainer = document.querySelector('.menu-card-container');

  //GET Function to get the menu items from the database
  async function getDashboardMenu() {

    const userApiKey = '13d5713b139a6df83565cf5f6dff63e2';
    const menuUrl = `https://ict4510.herokuapp.com/api/menus?api_key=${userApiKey}`;
    const response = await fetch(menuUrl);
    const menuData = await response.json();
    let menuPageHtml = ``;
    console.log(menuData);
    menuData.menu.forEach(item => {
      menuPageHtml += `<article class="menu-card">
                <div class="hort-line"></div>
                <div class="row">
                  <h3 class="menu-card-item">${item.item}</h3>
                  <p class="menu-card-price">$${item.price}</p>
                </div>
                <p class="menu-description">${item.description}</p>
               </article>`;
    })
    hideLoader();
    menuCardContainer.innerHTML = menuPageHtml;
  }
  getDashboardMenu();
}