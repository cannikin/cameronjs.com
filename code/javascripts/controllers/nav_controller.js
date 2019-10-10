import { Controller } from "stimulus";

export default class extends Controller {
  static get targets() {
    return ["link"];
  }

  connect() {
    const path = location.pathname;

    this.linkTargets.forEach(link => {
      if (link.getAttribute("href") === path) {
        link.classList.add(...this.activeClass);
      }
    });
  }

  get activeClass() {
    return this.data.get("active-class").split(" ");
  }
}
