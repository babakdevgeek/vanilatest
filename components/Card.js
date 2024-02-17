import { fetchTemplate } from "../helpers/fetcher.js";

export class Card extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
  }
  async render() {
    const template = await fetchTemplate("../templates/card.html");
    this.root.innerHTML = template;
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const { message } = await res.json();
    this.root.querySelector("img").src = message;
  }
}

customElements.define("card-element", Card);
