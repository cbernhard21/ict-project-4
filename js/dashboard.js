/*
Christoper Bernhard
University Of Denver
ICT 4510 - Final Project
Contains all scripts for the dashboard page
a GET function to get the menu items
a POST function to send new items to the database
a DELETE function to delete items from the database
a display function to display all the menu items
*/


'use strict'

import { resetForm, showLoader, hideLoader } from './helpers.js'

export function handleDashboard() {

  //Global varibles
  const user = JSON.parse(sessionStorage.getItem('userData'));
  const menuItemForm = document.querySelector('#menu-item-form')
  const menu = document.querySelector('#menu-items-list');
  const userFirstName = JSON.parse(sessionStorage.getItem('userData')).user.first_name;
  const userLastName = JSON.parse(sessionStorage.getItem('userData')).user.last_name;
  const userToken = JSON.parse(sessionStorage.getItem('userData')).user.token;
  const userApiKey = JSON.parse(sessionStorage.getItem('userData')).user.api_key;
  const menuUrl = `https://ict4510.herokuapp.com/api/menus?api_key=${userApiKey}`;
  const menuItemFormBtn = document.querySelector('#menu-item-form-btn');

  //generates text for dashboard header
  function welcomeHtml() {
    const welcomeMessage = document.querySelector('#welcome-text');
    const helloHTML = `
                      <p class="small-text">Hello, ${userFirstName} ${userLastName}</p>
                      <h1>Admin Dashboard</h1>
                      `;
    welcomeMessage.innerHTML = helloHTML;
  }

  //GET Function to get the menu items from the database and display the HTML
  async function getDashboardMenu() {
    showLoader();
    const response = await fetch(menuUrl);
    const menuData = await response.json();
    let html = ``;
    menuData.menu.forEach(item => {
      html += `<li class="dashboard-menu-item">
                <details>
                  <summary>${item.item} <span class="hidden item-id">${item.id}</span><i class="fas fa-trash"></i></summary>
                  <p>${item.price}</p>
                  <p>${item.description}</p>
                </details>
              </li>`;
    })
    hideLoader();
    menu.innerHTML = html;
    const deleteBtns = document.querySelectorAll('.fa-trash');

    deleteBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        let itemHtml = e.target.parentElement;
        let itemId = itemHtml.querySelector('.item-id').textContent;
        deleteMenuItem(itemId);
      })
    })
  }

  welcomeHtml();
  getDashboardMenu();
  logOut();

  //POST Function to send new menu item to database
  async function sendMenuItems() {
    const item = document.querySelector('#item').value;
    const description = document.querySelector('#description').value;
    const price = document.querySelector('#price').value;

    const menuItemData = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'x-access-token': userToken
      },
      body: JSON.stringify({
        item: item,
        price: price,
        description: description
      }),
    }
    try {
      const res = await fetch(menuUrl, menuItemData);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`)
      } else {
        const data = await res.json();
        //  console.log(data);
        getDashboardMenu();
      }
    } catch (err) {
      console.log(err)
    }
  }

  //DELETE Function delete menu items from database with one click
  async function deleteMenuItem(id) {
    const deleteUrl = `https://ict4510.herokuapp.com/api/menus?api_key=13d5713b139a6df83565cf5f6dff63e2&id=${id}`
    const deleteMenuItemSettings = {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'x-access-token': userToken
      },
    }
    try {
      const res = await fetch(deleteUrl, deleteMenuItemSettings);
      //  console.log(res);
      getDashboardMenu();
    } catch (error) {
      console.log(error)
    }
  }

  //log the user out
  function logOut() {
    const logOutBtn = document.querySelector('.btn-logout')
    logOutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      sessionStorage.clear();
      window.location.href = './login.html'
    })
  }


  //Event Listeners

  //event for adding menu item in the form
  menuItemFormBtn.addEventListener('click', (e) => {
    e.preventDefault();
    sendMenuItems();
    resetForm(menuItemForm);
  })
};