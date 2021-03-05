'use strict'

export function menuPageDisplay() {
  const menuWrapper = document.querySelector('.menu-wrapper');
  console.log('menu page function')

  //GET Function to get the menu items from the database
  async function getDashboardMenu() {
    // const userApiKey = JSON.parse(sessionStorage.getItem('userData')).user.api_key;
    const userApiKey = '13d5713b139a6df83565cf5f6dff63e2';
    const menuUrl = `https://ict4510.herokuapp.com/api/menus?api_key=${userApiKey}`;
    const response = await fetch(menuUrl);
    const menuData = await response.json();
    let html = ``;
    console.log(menuData);
    menuData.menu.forEach(item => {
      html += `<article class="menu-card">
                <div class="hort-line"></div>
                <div class="row">
                  <h3 class="menu-card-item">${item.item}</h3>
                  <p class="menu-card-price">${item.price}</p>
                </div>
                <p class="menu-description">${item.description}</p>
               </article>`;
    })
    menuWrapper.innerHTML = html;
  }
  getDashboardMenu();
}