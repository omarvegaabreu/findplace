export class Modal {
  constructor(contentId, fallBack) {
    this.fallBack = fallBack;
    this.contentTemplateEl = document.getElementById(contentId);
    this.modalTemplateEl = document.getElementById("modal-template");
  }
  showModal() {
    // /**IE check */
    if ("content" in document.createElement("template")) {
      const modalElements = document.importNode(
        this.modalTemplateEl.content,
        true
      );
      const modalElement = document.querySelector(".backdrop");
      const backDropElement = document.querySelector(".modal");
      const contentElement = document.importNode(
        this.contentTemplateEl.content,
        true
      );

      modalElement.appendChild(contentElement);
      document.body.insertAdjacentElement("afterbegin", modalElement);
      document.body.insertAdjacentElement("afterbegin", backDropElement);
    } else {
      alert(this.fallBack);
    }
  }
  hideModal() {}
}
