import { fetchTemplate } from "../helpers/fetcher.js";

export class Header extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
  }

  async render() {
    const template = await fetchTemplate(
      "https://babakdevgeek.github.io/templates/card.html"
    );
    this.root.innerHTML = template;
  }
}

customElements.define("header-element", Header);
