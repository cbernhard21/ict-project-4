 //things to do still, display menu items, delete menu items, reset form


 export function handleDashboard() {
   //varibles
   const user = JSON.parse(sessionStorage.getItem('userData'));
   const menuItemForm = document.querySelector('#menu-item-form')
   const menu = document.querySelector('#menu');
   const userFirstName = JSON.parse(sessionStorage.getItem('userData')).user.first_name;
   const userApiKey = JSON.parse(sessionStorage.getItem('userData')).user.api_key;
   const userToken = JSON.parse(sessionStorage.getItem('userData')).user.token;
   const menuUrl = `https://ict4510.herokuapp.com/api/menus?api_key=${userApiKey}`

   const welcomeMessage = document.querySelector('#welcome-text');
   const helloHTML = `Hello ${userFirstName} to Your Dashboard`;

   welcomeMessage.textContent = helloHTML;

   //get menu items from api
   async function getMenu() {
     const response = await fetch(menuUrl);
     const menuData = await response.json();
     console.log(menuData);
   }

   //send menu items to api
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
         console.log(data);
       }
     } catch (err) {
       console.log(err)
     }
   }





   const menuItemFormBtn = document.querySelector('#menu-item-form-btn');

   menuItemFormBtn.addEventListener('click', (e) => {
     e.preventDefault();
     sendMenuItems();
   })

   getMenu();

 };