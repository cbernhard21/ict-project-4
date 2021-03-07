const template = document.createElement('template');
template.innerHTML = `
<style>
  footer {
    background-color: var(--bg-color);
    text-align: center;
    padding: 1rem 0;
  }

  footer p {
    margin: .5rem 0;
  }
</style>

<footer>
  <p>Christopher Bernhard</p>
  <p>University of Denver ICT 4510 Portfolio Assignment</p>
</footer>

`;

class FooterComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

}

window.customElements.define('custom-footer', FooterComponent);