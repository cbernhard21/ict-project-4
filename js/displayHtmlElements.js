/*
Christoper Bernhard
University Of Denver
ICT 4510 - Final Project
the script for getting the foot html and displaying it on the page
*/

'use strict'

export async function getFooterHtml() {
  const response = await fetch('./components/footer.html');
  const footerHtml = await response.text();
  document.querySelector('#footer').innerHTML = footerHtml;
}