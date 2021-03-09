export async function getFooterHtml() {
  const response = await fetch('./components/footer.html');
  const footerHtml = await response.text();
  document.querySelector('#footer').innerHTML = footerHtml;
}