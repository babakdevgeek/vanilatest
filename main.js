import { Header } from "./components/header.js";
import { Card } from "./components/Card.js";
import { fetchTemplate } from "./helpers/fetcher.js";
import { FlexSection } from "./components/FlexSection.js";
window.addEventListener("DOMContentLoaded", () => {
  const header = document.createElement("header-element");
  document.body.appendChild(header);
  const flexSection = document.createElement("flexsection-element");
  document.body.appendChild(flexSection);
});
