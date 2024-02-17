import { fetchTemplate } from "../helpers/fetcher.js";

export class FlexSection extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
  }
  async render() {
    const template = await fetchTemplate("/templates/flexSection.html");
    this.root.innerHTML = template;
    const range = 20;
    for (let x = 0; x < range; x++) {
      const card = document.createElement("card-element");
      this.root.querySelector("div").appendChild(card);
    }
  }
}

customElements.define("flexsection-element", FlexSection);
