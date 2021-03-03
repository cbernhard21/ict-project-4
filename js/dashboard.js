 export function handleDashboard() {

   //varibles
   const user = JSON.parse(sessionStorage.getItem('userData'));
   const menuItemForm = document.querySelector('#menu-item-form')
   const menu = document.querySelector('#menu');
   const userFirstName = JSON.parse(sessionStorage.getItem('userData')).user.first_name;
   const userApiKey = JSON.parse(sessionStorage.getItem('userData')).user.api_key;
   const userToken = JSON.parse(sessionStorage.getItem('userData')).user.token;
   const menuUrl = `https://ict4510.herokuapp.com/api/menus?api_key=${userApiKey}`;

   //generates text for dashboard header
   function welcomeHtml() {
     const welcomeMessage = document.querySelector('#welcome-text');
     const helloHTML = `Welcome ${userFirstName} to Your Dashboard`;
     welcomeMessage.textContent = helloHTML;
   }

   //GET Function
   async function getMenu() {
     const response = await fetch(menuUrl);
     const menuData = await response.json();
     let html = ``;
     console.log(menuData);
     menuData.menu.forEach(item => {
       //  console.log(item.price);
       html += `<li class="dashboard-menu-item">${item.item} <span class="hidden item-id">${item.id}</span><i class="fas fa-trash"></i></li>`;
     })
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
   getMenu();

   //POST Function
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
       //write try, fetch() and catch statment here
     try {
       const res = await fetch(menuUrl, menuItemData);
       if (!res.ok) {
         throw new Error(`HTTP error! status: ${res.status}`)
       } else {
         const data = await res.json();
         //  console.log(data);
         getMenu();
       }
     } catch (err) {
       console.log(err)
     }
   }

   //DELETE Function
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
       getMenu();
     } catch (error) {
       console.log(error)
     }
   }

   const menuItemFormBtn = document.querySelector('#menu-item-form-btn');

   menuItemFormBtn.addEventListener('click', (e) => {
     e.preventDefault();
     sendMenuItems();
   })
 };